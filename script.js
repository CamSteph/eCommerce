// FIRST SLIDER
$('.slider-one').not('.slick-intialized').slick({
    autoplay: true,
    autoplaySpeed: 3800,
    dots: true,
    fade: true,
    prevArrow: ".site-slider .slider-btn prev",
    nextArrow: ".site-slider .slider-btn .next"
});

// SECOND SLIDER
$('.slider-two').not('.slick-intialized').slick({
   
    prevArrow: ".site-slider-two .prev",
    nextArrow: ".site-slider-two .next",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
});

