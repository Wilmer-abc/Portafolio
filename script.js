document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    // Ocultar todas las secciones excepto la de inicio al cargar la página
    sections.forEach(section => {
        if (section.id !== "inicio") {
            section.style.display = "none";
        }
    });

    // Mostrar la sección correspondiente al hacer clic en un enlace del menu
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Mostrar la sección correspondiente
            const targetSection = document.querySelector(`#${this.dataset.section}`);
            targetSection.style.display = "block";

            // Aplicar animación
            targetSection.classList.add("visible");
        });
    });

    // Animación al hacer scroll
    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Para animar las secciones visibles al cargar la página
});