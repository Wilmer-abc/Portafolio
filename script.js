document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    const header = document.querySelector("header");
    
    // Efecto de partículas en el header
    createParticles(header);
    
    // Mostrar solo la sección de inicio al cargar
    sections.forEach(section => {
        if (section.id !== "inicio") {
            section.style.display = "none";
        } else {
            section.style.display = "block";
            animateSection(section);
        }
    });
    
    // Navegación suave entre secciones
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Ocultar todas las secciones
            sections.forEach(section => {
                section.style.display = "none";
                section.classList.remove("visible");
            });
            
            // Mostrar la sección objetivo
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.style.display = "block";
                setTimeout(() => {
                    animateSection(targetSection);
                }, 50);
                
                // Desplazamiento suave
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Animación al hacer scroll
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100 && section.style.display !== "block") {
                section.style.display = "block";
                animateSection(section);
            }
        });
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Verificar al cargar
    
    // Animación para una sección
    function animateSection(section) {
        section.classList.add("visible");
        
        // Animación específica para habilidades
        if (section.id === "habilidades") {
            const blocks = section.querySelectorAll(".block");
            blocks.forEach((block, index) => {
                setTimeout(() => {
                    block.style.opacity = "1";
                    block.style.transform = "translateY(0)";
                }, 100 * index);
            });
        }
    }
    
    // Efecto de partículas
    function createParticles(container) {
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            
            // Posición aleatoria
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Tamaño aleatorio
            const size = Math.random() * 5 + 1;
            
            // Duración de animación aleatoria
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            // Estilo de la partícula
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = `rgba(102, 126, 234, ${Math.random() * 0.5 + 0.1})`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            container.appendChild(particle);
        }
    }
    
    // Efecto hover en proyectos
    const proyectos = document.querySelectorAll(".proyecto");
    proyectos.forEach(proyecto => {
        proyecto.addEventListener("mousemove", (e) => {
            const rect = proyecto.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            proyecto.style.setProperty("--mouse-x", `${x}px`);
            proyecto.style.setProperty("--mouse-y", `${y}px`);
        });
    });
});