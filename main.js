import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '/src/assets/scss/style.scss';
import Swiper from 'swiper';
const menu = document.querySelector('.header__container');

function menuOpen() {
    menu.classList.add('menu-open');
}
function menuClose() {
    menu.classList.remove('menu-open');
}

function menuInit() {
    if (document.querySelector('.icon-menu')) {
        document.addEventListener('click', function (e) {
            if (e.target.closest('.icon-menu')) {
                document.documentElement.classList.toggle('menu-open');
            }
        });
    }
}

menuInit();

document.addEventListener('DOMContentLoaded', function () {
    const filterItems = document.querySelectorAll('.filter__item');

    filterItems.forEach((item) => {
        // Добавляем обработчик события клика для каждого элемента
        item.addEventListener('click', () => {
            // Удаляем класс active у всех элементов
            filterItems.forEach((el) => el.classList.remove('active'));

            // Добавляем класс active только к выбранному элементу
            item.classList.add('active');
        });
    });
    const swiperContainers = document.querySelectorAll('[data-swiper="true"]');
    const swipers = {
        team: null,
        projects: null,
        filter: null,
    };
    const forDesignersSwiper = new Swiper('.swiper__for-designers', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 400,
        // Настройки навигации (если нужно)
        navigation: {
            nextEl: '.swiper-button-next-for-designers',
            prevEl: '.swiper-button-prev-for-designers',
        },
        pagination: {
            el: '.swiper-pagination-for-designers',
            type: 'fraction',
            clickable: true,
        },

        on: {
            init: function (swiper) {
                const allSlides = document.querySelector('.fraction-for-designers__all');
                const allSlidesItems = document.querySelectorAll(
                    '.swiper-slide__for-designers:not(.swiper-slide-duplicate)'
                );

                allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;

                console.log(swiper);
            },
            slideChange: function (swiper) {
                const currentSlide = document.querySelector('.fraction-for-designers__current');
                currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            },
        },
    });
    const feedbackPageSwiper = new Swiper('.feedback-and-guarantees-page .swiper__feedback', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 400,
        // Настройки навигации (если нужно)
        navigation: {
            nextEl: '.feedback-and-guarantees-page .swiper-button-next-feedback',
            prevEl: '.feedback-and-guarantees-page .swiper-button-prev-feedback',
        },
        pagination: {
            el: '.feedback-and-guarantees-page .swiper-pagination-feedback',
            type: 'fraction',
            clickable: true,
        },

        on: {
            init: function (swiper) {
                const allSlides = document.querySelector('.feedback-and-guarantees-page .fraction-feedback__all');
                const allSlidesItems = document.querySelectorAll(
                    '.feedback-and-guarantees-page .feedback-swiper-slide:not(.swiper-slide-duplicate)'
                );

                allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;

                console.log(swiper);
            },
            slideChange: function (swiper) {
                const currentSlide = document.querySelector(
                    '.feedback-and-guarantees-page .fraction-feedback__current'
                );
                currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            },
        },
    });

    const feedbackSwiper = new Swiper('.main-page .swiper__feedback', {
        modules: [Navigation, Pagination],
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 400,
        // Настройки навигации (если нужно)
        navigation: {
            nextEl: '.main-page .swiper-button-next-feedback',
            prevEl: '.main-page .swiper-button-prev-feedback',
        },
        pagination: {
            el: '.main-page .swiper-pagination-feedback',
            type: 'fraction',
            clickable: true,
        },

        on: {
            init: function (swiper) {
                const allSlides = document.querySelector('.main-page .fraction-feedback__all');
                const allSlidesItems = document.querySelectorAll(
                    '.main-page .feedback-swiper-slide:not(.swiper-slide-duplicate)'
                );

                allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;

                console.log(swiper);
            },
            slideChange: function (swiper) {
                const currentSlide = document.querySelector('.main-page .fraction-feedback__current');
                currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
                const swiperContainer = document.querySelector('.main-page .swiper__feedback');
                swiperContainer.style.height = '';
            },
        },
    });
    const filterSwiper = new Swiper('.swiper__filter', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        speed: 400,
        observer: true,
        observeParents: true,
        // breakpoints: {
        //     375: {
        //         slidesPerView: 3.2,
        //     },
        //     992: {
        //         slidesPerView: 6,
        //     },
        //     1268: {
        //         slidesPerView: 7,
        //     },
        // },
        // Настройки навигации (если нужно)
    });
    const gallerySwiper = new Swiper('.swiper__gallery', {
        modules: [Navigation, Pagination],
        slidesPerView: 1.2,
        spaceBetween: 20,
        loop: true,
        speed: 400,
        // Настройки навигации (если нужно)
        navigation: {
            nextEl: '.swiper-button-next-gallery',
            prevEl: '.swiper-button-prev-gallery',
        },
        pagination: {
            el: '.swiper-pagination-gallery',
            type: 'fraction',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1268: {
                slidesPerView: 4,
            },
        },

        on: {
            init: function (swiper) {
                const allSlides = document.querySelector('.fraction-gallery__all');
                const allSlidesItems = document.querySelectorAll('.gallery-swiper-slide:not(.swiper-slide-duplicate)');

                allSlides.innerHTML = allSlidesItems.length < 10 ? `0${allSlidesItems.length}` : allSlidesItems.length;

                console.log(swiper);
            },
            slideChange: function (swiper) {
                const currentSlide = document.querySelector('.fraction-gallery__current');
                currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex + 1;
            },
        },
    });

    function updateSwipers() {
        const screenWidth = window.innerWidth;
        console.log('Screen width inside updateSwipers:', screenWidth); // Для отладки

        swiperContainers.forEach((container) => {
            const isTeamContainer = container.classList.contains('swiper__team-photo');
            const isProjectsContainer = container.classList.contains('swiper__projects');
            const isFilterContainer = container.classList.contains('swiper__filter');
            const swiperWrapper = container.querySelector('[data-swiper-wrapper="true"]');
            const swiperSlides = swiperWrapper ? swiperWrapper.querySelectorAll('[data-swiper-slide="true"]') : [];

            if (screenWidth < 768) {
                console.log('Screen width is less than 768'); // Для отладки
                if (!container.classList.contains('swiper')) {
                    console.log('Adding swiper classes'); // Для отладки
                    // Добавляем классы для Swiper
                    container.classList.add('swiper');
                    swiperWrapper.classList.add('swiper-wrapper');
                    swiperSlides.forEach((slide) => slide.classList.add('swiper-slide'));

                    // Инициализируем Swiper
                    initializeSwipers();
                }
            } else {
                if (container.classList.contains('swiper')) {
                    console.log('Removing swiper classes'); // Для отладки
                    // Удаляем классы Swiper
                    container.classList.remove('swiper');
                    swiperWrapper.classList.remove('swiper-wrapper');
                    swiperSlides.forEach((slide) => slide.classList.remove('swiper-slide'));

                    if (swipers.team) {
                        swipers.team.destroy(true, true);
                        swipers.team = null;
                    }
                    if (swipers.projects) {
                        swipers.projects.destroy(true, true);
                        swipers.projects = null;
                    }
                    if (swipers.filter) {
                        console.log(1);
                        swipers.filter.destroy(true, true);
                        swipers.filter = null;
                    }
                }
            }
        });
    }

    function initializeSwipers() {
        console.log('Initializing swipers'); // Для отладки

        if (window.innerWidth < 768) {
            // Инициализируем Swiper для контейнера team
            if (!swipers.team) {
                swipers.team = new Swiper('.swiper__team-photo', {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    loop: true,
                    speed: 400,
                });
            }

            // Инициализируем Swiper для контейнера projects
            if (!swipers.projects) {
                swipers.projects = new Swiper('.swiper__projects', {
                    slidesPerView: 1.2,
                    spaceBetween: 8,
                    loop: true,
                    speed: 400,
                });
            }
            if (!swipers.filter) {
                swipers.filter = new Swiper('.swiper__filter', {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    loop: true,
                    speed: 400,
                });
            }
        }
    }

    // Обновляем состояние Swipers при загрузке страницы
    updateSwipers();
    initializeSwipers();

    // Обновляем состояние Swipers при изменении размера окна
    window.addEventListener('resize', updateSwipers);
});

window.addEventListener('resize', function () {
    console.log('Resizing...');
});

// script.js

// script.js

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.project-swiper-button');
    const slidesWrapper = document.querySelector('.slides');

    let currentIndex = 0;
    let startX = 0; // Начальная позиция касания
    let isSwiping = false; // Флаг для отслеживания свайпа

    if (slides.length === 0 || !nextButton || !slidesWrapper) {
        // Если один из элементов не найден, прекращаем выполнение скрипта
        return;
    }

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });

        if (window.innerWidth <= 768) {
            const slideWidth = 80; // Основной слайд занимает 80% ширины
            slidesWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        } else {
            slidesWrapper.style.transform = 'translateX(0)';
        }
    }

    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        updateSlides();
    });

    // Инициализация
    updateSlides();

    // Обновление слайдов при изменении размера окна
    window.addEventListener('resize', updateSlides);

    // Подключение обработки касаний
    slidesWrapper.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX; // Запоминаем начальную позицию касания
        isSwiping = true;
    });

    slidesWrapper.addEventListener('touchmove', (event) => {
        if (!isSwiping) return;

        const currentX = event.touches[0].clientX;
        const diffX = startX - currentX;

        if (Math.abs(diffX) > 50) {
            // Условие для определения свайпа
            if (diffX > 0) {
                // Свайп влево
                currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
            } else {
                // Свайп вправо
                currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
            }
            updateSlides();
            isSwiping = false; // Завершаем свайп
        }
    });

    slidesWrapper.addEventListener('touchend', () => {
        isSwiping = false; // Завершаем свайп
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const MAX_LENGTH = 150;

    function truncateText(element, maxLength) {
        const text = element.textContent;
        if (text.length > maxLength) {
            const truncated = text.slice(0, maxLength) + '...';
            const fullText = text;

            element.textContent = truncated;

            const moreTextSpan = document.createElement('span');
            moreTextSpan.classList.add('feedback-swiper-slide__text');
            moreTextSpan.style.display = 'none';
            moreTextSpan.textContent = fullText;

            element.appendChild(moreTextSpan);

            return moreTextSpan;
        }

        return null;
    }

    function toggleTextVisibility(button, moreTextSpan, swiperContainer) {
        button.addEventListener('click', () => {
            if (moreTextSpan.style.display === 'none') {
                moreTextSpan.style.display = 'inline';
                button.textContent = 'Скрыть';

                // Изменяем высоту контейнера на основании полной высоты содержимого
                swiperContainer.style.height = swiperContainer.scrollHeight + 'px';
            } else {
                moreTextSpan.style.display = 'none';
                button.textContent = 'Читать полностью';

                // Устанавливаем высоту контейнера в auto, чтобы он корректно адаптировался
                swiperContainer.style.height = '';
            }

            // Обновление Swiper для правильной работы высоты
            if (swiperContainer.swiper) {
                swiperContainer.swiper.update();
            }
        });
    }

    document.querySelectorAll('.swiper-slide').forEach((slide) => {
        const textElement = slide.querySelector('.feedback-swiper-slide__text');
        const swiperContainer = document.querySelector('.swiper__feedback');

        if (textElement) {
            const moreTextSpan = truncateText(textElement, MAX_LENGTH);

            if (moreTextSpan) {
                const button = slide.querySelector('.feedback__all');
                if (button) {
                    toggleTextVisibility(button, moreTextSpan, swiperContainer);
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Функция для плавного перехода к секции
    function initSmoothScroll() {
        // Находим все ссылки с классом scroll-link
        const scrollLinks = document.querySelectorAll('.scroll-link');

        scrollLinks.forEach((link) => {
            link.addEventListener('click', function (event) {
                event.preventDefault(); // Отменяем стандартное действие ссылки

                // Получаем значение атрибута data-target
                const targetSelector = this.getAttribute('data-target');
                const targetElement = document.querySelector(targetSelector);

                if (targetElement) {
                    // Прокручиваем страницу к элементу
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error('Не найден элемент с селектором:', targetSelector);
                }
            });
        });
    }

    // Инициализация функции
    initSmoothScroll();
});
