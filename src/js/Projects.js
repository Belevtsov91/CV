const projectsList = document.querySelector(".projects-list");

if (projectsList) {
  projectsList.style.overflowX = "auto";
  projectsList.style.overflowY = "hidden";

  const onWheel = (event) => {
    if (projectsList.scrollWidth <= projectsList.clientWidth) {
      return;
    }

    const delta = event.deltaY || event.deltaX;
    if (delta === 0) {
      return;
    }

    event.preventDefault();
    projectsList.scrollLeft += delta;
  };

  projectsList.addEventListener("wheel", onWheel, { passive: false });
  projectsList.addEventListener("dragstart", (event) => event.preventDefault());

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  const onPointerDown = (event) => {
    const interactiveTarget = event.target.closest(
      "a, button, input, textarea, select, label",
    );
    if (interactiveTarget) {
      return;
    }

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    isDragging = true;
    startX = event.clientX;
    startScrollLeft = projectsList.scrollLeft;
    projectsList.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!isDragging) {
      return;
    }

    event.preventDefault();
    const walk = event.clientX - startX;
    projectsList.scrollLeft = startScrollLeft - walk;
  };

  const endDrag = (event) => {
    if (!isDragging) {
      return;
    }

    isDragging = false;
    if (projectsList.hasPointerCapture(event.pointerId)) {
      projectsList.releasePointerCapture(event.pointerId);
    }
  };

  projectsList.addEventListener("pointerdown", onPointerDown);
  projectsList.addEventListener("pointermove", onPointerMove);
  projectsList.addEventListener("pointerup", endDrag);
  projectsList.addEventListener("pointercancel", endDrag);
  projectsList.addEventListener("pointerleave", endDrag);
}
