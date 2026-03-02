const STORAGE_KEY = "skillsAccordionState";

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

const readAccordionState = () => {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      design: Boolean(parsed.design),
      development: Boolean(parsed.development),
    };
  } catch {
    return {
      design: false,
      development: false,
    };
  }
};

const saveAccordionState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore storage errors
  }
};

const getCurrentAccordionState = () => {
  const designList = document.querySelector(".skills .design-list");
  const developmentGrid = document.querySelector(".skills .development-grid");

  return {
    design: Boolean(designList && !designList.classList.contains("is-collapsed")),
    development: Boolean(
      developmentGrid && !developmentGrid.classList.contains("is-collapsed"),
    ),
  };
};

const applyAccordionState = (state) => {
  const designList = document.querySelector(".skills .design-list");
  const developmentGrid = document.querySelector(".skills .development-grid");
  const designButton = document.querySelector(
    ".skills .design-front-set .set-skills-toggle",
  );
  const developmentButton = document.querySelector(
    ".skills .development-set .set-skills-toggle",
  );

  if (designList) {
    designList.classList.toggle("is-collapsed", !state.design);
  }

  if (developmentGrid) {
    developmentGrid.classList.toggle("is-collapsed", !state.development);
  }

  if (designButton) {
    designButton.setAttribute("aria-expanded", String(state.design));
  }

  if (developmentButton) {
    developmentButton.setAttribute("aria-expanded", String(state.development));
  }
};

const setInitialCollapsedState = () => {
  applyAccordionState(readAccordionState());
};

const closeAllSkillsAccordions = () => {
  applyAccordionState({ design: false, development: false });
  saveAccordionState({ design: false, development: false });
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

  saveAccordionState(getCurrentAccordionState());
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setInitialCollapsedState);
} else {
  setInitialCollapsedState();
}
