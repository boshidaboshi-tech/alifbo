// Функсия барои кор кардани менюи мобилӣ
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Пешгирӣ кардани пахши тасодуфӣ берун аз меню
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            navLinks.classList.toggle('active');
            // Тағйир додани иконка
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Пӯшидани меню ҳангоми пахш кардани пайванд
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });

        // Пӯшидани меню ҳангоми пахш кардани берун аз он
        document.addEventListener('click', (event) => {
            if (!event.target.closest('nav') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    }
}

// Функсия барои инициализатсияи саҳифа
function initializePage() {
    displayLessons();
    setupMobileMenu();
}

// Инициализатсияи саҳифа ҳангоми боргирӣ
document.addEventListener('DOMContentLoaded', initializePage); s