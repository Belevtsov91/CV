const getToggleContent = (toggleButton) => {
  const card = toggleButton.closest(".design-front-set, .development-set");
  if (!card) return null;

  if (card.classList.contains("design-front-set")) {
    return card.querySelector(".design-list");
  }

  if (card.classList.contains("development-set")) {
    return card.querySelector(".development-grid");
  }

  return null;
};

const setInitialCollapsedState = () => {
  const designList = document.querySelector(".skills .design-list");
  const developmentGrid = document.querySelector(".skills .development-grid");
  const toggleButtons = document.querySelectorAll(".skills .set-skills-toggle");

  if (designList) {
    designList.classList.add("is-collapsed");
  }

  if (developmentGrid) {
    developmentGrid.classList.add("is-collapsed");
  }

  toggleButtons.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
};

const closeAllSkillsAccordions = () => {
  const designList = document.querySelector(".skills .design-list");
  const developmentGrid = document.querySelector(".skills .development-grid");
  const toggleButtons = document.querySelectorAll(".skills .set-skills-toggle");

  if (designList) {
    designList.classList.add("is-collapsed");
  }

  if (developmentGrid) {
    developmentGrid.classList.add("is-collapsed");
  }

  toggleButtons.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
};

document.addEventListener("click", (event) => {
  const clickedInsideSkillsCard = event.target.closest(
    ".design-front-set, .development-set",
  );

  if (!clickedInsideSkillsCard) {
    closeAllSkillsAccordions();
    return;
  }

  const toggleButton = event.target.closest(".set-skills-toggle");
  if (!toggleButton) return;

  const content = getToggleContent(toggleButton);
  if (!content) return;

  content.classList.toggle("is-collapsed");
  toggleButton.setAttribute(
    "aria-expanded",
    String(!content.classList.contains("is-collapsed")),
  );
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setInitialCollapsedState);
} else {
  setInitialCollapsedState();
}
