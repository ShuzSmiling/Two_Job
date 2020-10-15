$(function(){
    //Заказать звонок
    $('.callback').on('click', function() {
        let callback_id = $('#' + $(this).attr('rel'));
        $(callback_id).css('display', 'flex')
    });
    $('.callback-form__close').on('click', function() {
        $('.callback-form').hide();
    });

    //Плавный скролл
    $(document).ready(function(){
        $('a[href^="#"]').on('click', function(e){
            e.preventDefault();
            let t = 1000;
            let d = $(this).attr('href');
            $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
        });
    });

    //Узнать больше
    $('.pop-up').on('click', function() {
        let callback_id = $('#' + $(this).attr('rel'));
        $(callback_id).css('display', 'flex')
    });
    $('.callback-form__close').on('click', function() {
        $('.callback-form').hide();
    });

    //Маска ввода
    $('.callback-form__phone--phone').inputmask({"mask": "(999) 999-9999"});

    // бургер
    $('.header__nav-burger').on('click', function(event) {
        $('.header__header-nav').show('active');
    });
    $('.header__nav-close').on('click', function(event) {
        $('.header__header-nav').hide('active');
    });
    if ($(window).width() <= 1024) {
        $('.header__link').on('click', function(event) {
            $('.header__header-nav').hide();
        });

    }

    // слайдер
    let mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            590: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1025: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

        },
        autoplay: {
            delay: 3000,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //Кнопка вверх
    let btnUp = $('.btn-up');
    $(window).scroll(function(){
        if ($(window).scrollTop()>300) {
            btnUp.addClass('show');
        } else {
            btnUp.removeClass('show');
        }
    });
    btnUp.on('click', function(e) {
        $('html, body').animate({scrollTop:0}, '300');
    }); 
})
