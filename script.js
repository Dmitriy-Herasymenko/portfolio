document.addEventListener("DOMContentLoaded", function () {
    const starsContainer = document.querySelector(".stars");

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        // Випадкове розташування
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // Випадковий розмір, швидкість мерехтіння та руху
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s, ${Math.random() * 10 + 5}s`;

        starsContainer.appendChild(star);

        // Видалення зірки після завершення анімації
        setTimeout(() => {
            star.remove();
        }, 10000);
    }

    // Генерація початкових зірок
    for (let i = 0; i < 80; i++) {
        createStar();
    }

    // Постійне додавання нових зірок
    setInterval(createStar, 300);
});


document.addEventListener("DOMContentLoaded", function () {
    // Ініціалізація головного Swiper (проекти)
    new Swiper(".mainSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".mainSwiper .swiper-button-next",
            prevEl: ".mainSwiper .swiper-button-prev",
        },
    });


    document.querySelectorAll(".subSwiper").forEach((swiperEl) => {
        new Swiper(swiperEl, {
            slidesPerView: 1,
            pagination: {
                el: swiperEl.querySelector(".swiper-pagination"), 
                clickable: true,
            },
            navigation: {
                nextEl: swiperEl.querySelector(".swiper-button-next"),
                prevEl: swiperEl.querySelector(".swiper-button-prev"),
            },
            autoplay: {
                delay: 3000, 
                disableOnInteraction: false, 
            },
            loop: true,
        });
    });
});

