import "./style.css";
import "./js/sidebar.js";
import "./js/Projects.js";
import "./js/Skills.js";
import "./js/Contact-form.js";

const initScrollReveal = () => {
  const targets = document.querySelectorAll(
    [
      ".sidebar .title",
      ".sidebar .sub-title",
      ".sidebar .looking",
      ".sidebar .contacts-item",
      ".sidebar .socials-item",
      ".sidebar .languages-item",
      ".main-content h2",
      ".main-content h3",
      ".main-content h4",
      ".main-content p",
      ".main-content li",
      ".main-content a",
      ".main-content span",
    ].join(", "),
  );

  if (!targets.length) return;

  targets.forEach((item) => {
    item.classList.add("reveal-on-scroll");
  });

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((item) => {
      item.classList.add("is-visible");
      item.classList.remove("leave-top");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target;

        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          element.classList.remove("leave-top");
          return;
        }

        element.classList.remove("is-visible");
        element.classList.toggle("leave-top", entry.boundingClientRect.top < 0);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  targets.forEach((item) => {
    observer.observe(item);
  });

  const showAllAtBottom = () => {
    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (!nearBottom) return;

    targets.forEach((item) => {
      item.classList.add("is-visible");
      item.classList.remove("leave-top");
    });
  };

  window.addEventListener("scroll", showAllAtBottom, { passive: true });
  showAllAtBottom();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollReveal);
} else {
  initScrollReveal();
}
