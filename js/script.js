$(function () {
    'use strict'

    // Preloader
    setTimeout(function () {
        $('.preloader').fadeOut();
    }, 1000);

    // Menu Fixing js start here
    var navOff = $('.navbar').offset().top;

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 1) {
            $('.navbar').addClass('menu_fix');
        } else {
            $('.navbar').removeClass('menu_fix');
        }

    });

    // Hamburger Menu js start here
    $(document).ready(function () {
        $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
            $(this).toggleClass('open');
        });
    });

    // Review Slider Start Here
    $('.review_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '<i class="fas fa-arrow-left prev_aro"></i>',
        nextArrow: '<i class="fas fa-arrow-right nxt_aro"></i>',
        responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                }
            }
        ]
    });

});