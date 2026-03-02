const VIBER_DEFAULT_FALLBACK = "https://www.viber.com/download/";

document.addEventListener("click", (event) => {
  const link = event.target.closest('.contact-social-link[href^="viber://"]');
  if (!link) return;

  event.preventDefault();

  const appUrl = link.getAttribute("href");
  const fallbackUrl =
    link.getAttribute("data-fallback") || VIBER_DEFAULT_FALLBACK;

  let appOpened = false;

  const onVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      appOpened = true;
    }
  };

  document.addEventListener("visibilitychange", onVisibilityChange, {
    once: true,
  });

  window.location.href = appUrl;

  window.setTimeout(() => {
    if (!appOpened) {
      window.location.href = fallbackUrl;
    }
  }, 1200);
});
