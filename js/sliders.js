document.addEventListener('DOMContentLoaded', function() {
    const showSlider = new Swiper('.brands-carousel', {
        loop: true,
        slidesPerView: 3,
        speed: 1300,
        centeredSlides: true,
        navigation: {
            nextEl: '.brands-carousel__next',
            prevEl: '.brands-carousel__prev'
        }
    })
})

