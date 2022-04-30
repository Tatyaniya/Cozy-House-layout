const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // 1500: {
        //     slidesPerView: 1.6,
        //     spaceBetween: 40,
        // },
    }
});