
        // Анимация появления элементов при скролле
        document.addEventListener('DOMContentLoaded', function() {
            // Анимация для шапки при скролле
            window.addEventListener('scroll', function() {
                const header = document.getElementById('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Функция для проверки видимости элемента
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                    rect.bottom >= 0
                );
            }

            // Анимация для альбома
            const albumInfo = document.getElementById('albumInfo');
            function checkAlbumAnimation() {
                if (isElementInViewport(albumInfo)) {
                    albumInfo.classList.add('animate');
                    window.removeEventListener('scroll', checkAlbumAnimation);
                }
            }
            window.addEventListener('scroll', checkAlbumAnimation);
            checkAlbumAnimation(); // Проверить при загрузке

            // Анимация для соцсетей
            const socialLinks = document.querySelectorAll('.social-link');
            function checkSocialAnimation() {
                socialLinks.forEach(link => {
                    if (isElementInViewport(link)) {
                        link.classList.add('animate');
                    }
                });
            }
            window.addEventListener('scroll', checkSocialAnimation);
            checkSocialAnimation(); // Проверить при загрузке

         

            // Анимация для треков
            const trackItems = document.querySelectorAll('.track-list li');
            trackItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                
                function checkTrackAnimation() {
                    if (isElementInViewport(item)) {
                        item.style.animation = `slideInLeft 0.5s forwards ${index * 0.1}s`;
                        window.removeEventListener('scroll', checkTrackAnimation);
                    }
                }
                window.addEventListener('scroll', checkTrackAnimation);
                checkTrackAnimation(); // Проверить при загрузке
            });

            // Мобильное меню
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const nav = document.querySelector('nav ul');
            
            mobileMenuBtn.addEventListener('click', function() {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            });

            // Адаптация меню при изменении размера окна
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    nav.style.display = 'flex';
                } else {
                    nav.style.display = 'none';
                }
            });
        });
    