document.addEventListener("DOMContentLoaded", function () {
    const workExperienceTitle = document.querySelector(".work-experience-title");
    const workExperienceContainers = document.querySelectorAll(".work-experience-container");

    // Функция для скрытия/отображения всех компаний
    workExperienceTitle.addEventListener("click", function () {
        workExperienceContainers.forEach(container => {
            container.classList.toggle("hidden");
        });
    });

    // Функция для скрытия/отображения обязанностей внутри каждой компании
    workExperienceContainers.forEach(container => {
        const companyTitle = container.querySelector(".work-experience-company");
        const dutiesList = container.querySelector(".work-experience-duties-list");

        companyTitle.addEventListener("click", function () {
            dutiesList.classList.toggle("hidden");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const shakeElements = document.querySelectorAll(".work-experience-title, .work-experience-company");

    // Создаем tooltip
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = "Press It";
    document.body.appendChild(tooltip);

    shakeElements.forEach(element => {
        element.addEventListener("mouseenter", (event) => {
            // Добавляем эффект дрожания
            element.classList.add("shake-effect");

            // Показываем tooltip
            tooltip.style.opacity = "1";
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;

            // Удаляем класс после окончания анимации
            setTimeout(() => {
                element.classList.remove("shake-effect");
            }, 200);
        });

        element.addEventListener("mousemove", (event) => {
            // Двигаем tooltip за курсором
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        element.addEventListener("mouseleave", () => {
            // Скрываем tooltip
            tooltip.style.opacity = "0";
        });
    });
});
