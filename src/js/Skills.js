const getToggleContent = (title) => {
  const card = title.closest(".design-front-set, .development-set");
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

  if (designList) {
    designList.classList.add("is-collapsed");
  }

  if (developmentGrid) {
    developmentGrid.classList.add("is-collapsed");
  }
};

document.addEventListener("click", (event) => {
  const title = event.target.closest(".set-skills-title");
  if (!title) return;

  const content = getToggleContent(title);
  if (!content) return;

  content.classList.toggle("is-collapsed");
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setInitialCollapsedState);
} else {
  setInitialCollapsedState();
}
