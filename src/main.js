import "./style.css";
import "./js/sidebar.js";
import "./js/Projects.js";
import "./js/Skills.js";
import "./js/Contact-form.js";

const initScrollReveal = () => {
  const targets = document.querySelectorAll(
    [
      ".sidebar-logo",
      ".contacts",
      ".socials",
      ".languages",
      ".exp-item",
      ".projects-item",
      ".education-item",
      ".design-front-set",
      ".development-set",
      ".contact-social-link",
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
          observer.unobserve(element);
        }
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

  let didRevealAllAtBottom = false;

  const showAllAtBottom = () => {
    if (didRevealAllAtBottom) return;

    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (!nearBottom) return;

    didRevealAllAtBottom = true;

    targets.forEach((item) => {
      item.classList.add("is-visible");
      item.classList.remove("leave-top");
    });

    window.removeEventListener("scroll", showAllAtBottom);
  };

  window.addEventListener("scroll", showAllAtBottom, { passive: true });
  showAllAtBottom();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScrollReveal);
} else {
  initScrollReveal();
}
