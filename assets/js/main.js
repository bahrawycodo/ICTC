$(document).ready(function(){
    const isDesktop = window.matchMedia("(min-width: 1200px)").matches;
if(isDesktop) {
    $(".slider .main-slider").height((window.innerHeight - $(".navbar").height() - $(".top-nav").height()) + "px");
    $(".slider").height((window.innerHeight - $(".navbar").height() - $(".top-nav").height() + ($(".slider .about").height() / 2)) + "px");
}
    if(jQuery('.slider').length > 0){

        var swiper = new Swiper(".main-slider", {
            spaceBetween: 0,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

        });
    }
    makeSameHeight(".training-plan")
    makeSameHeight(".latest-programs")
    makeSameHeight(".special-programs")
    makeSameHeight(".latest-news")
    makeSameHeight(".page")
})
function makeSameHeight(containerSelector) {
    let maxHeight = 0;
    $(containerSelector).find('.SameHeight').each(function() {
        maxHeight = Math.max(maxHeight, $(this).height()); // Update maxHeight
    });
    $(containerSelector).find('.SameHeight').height(maxHeight);
}
let direction = document.documentElement.getAttribute('dir');

let rtl_setting = direction == 'rtl' ? true : false;
if($(".client_opinions_carousel").length > 0) {
    $('.client_opinions_carousel').slick({
        dots: true,
        speed: 1000,
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        prevArrow: ".CO_left_arrow",
        nextArrow: ".CO_right_arrow",
        rtl: rtl_setting,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                },
            },
        ]
    });
}
if($(".clients_carousel").length > 0) {
    $('.clients_carousel').slick({
        dots: true,
        speed: 1000,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        prevArrow: ".CO_left_arrow",
        nextArrow: ".CO_right_arrow",
        rtl: rtl_setting,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    });
}
function adjustPasswordStrengthWidth() {
    var containerWidth = $('.PasswordStrength').width(); // Get the width of the container
    var spanWidth = $('.PasswordStrength span').outerWidth(true); // Get the width of the span element including margins
    var remainingWidth = containerWidth - spanWidth - parseFloat($('.PasswordStrength ul').css('gap')); // Calculate the remaining width

    $('.PasswordStrength ul').css('width', remainingWidth); // Set the width of the ul
}
function checkPasswordStrength(password){
    var strength = 0;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) strength++;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) strength++;
    if (password.length >= 8) strength++;
    return strength;
}
if($('.customSelect').length > 0){
    $('.customSelect').generateSelect();
}
if($(".toggleInputPassword").length > 0) {
    $('.toggleInputPassword').click(function () {
        var $input = $(this).siblings('.password-input');
        $input.attr('type') === 'password' ? $input.attr('type', 'text') : $input.attr('type', 'password');
        $(this).find('i').toggleClass('fa-eye-slash').toggleClass('fa-eye');
    });
}
$(document).ready(function() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top');
        }
    });
})

