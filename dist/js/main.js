$(function() {
  //Заказать звонок
  $(function callbackForm() {
    $('.callback').on('click', function() {
      let callback_id = $('#' + $(this).attr('rel'));
      $(callback_id).css('display', 'flex')
    });
    $('.callback-form__close').on('click', function() {
      $('.callback-form').hide();
    });
  })

  //Узнать больше
  $(function popupForm() {
    $('.pop-up').on('click', function() {
      let callback_id = $('#' + $(this).attr('rel'));
      $(callback_id).css('display', 'flex')
    });
    $('.callback-form__close').on('click', function() {
      $('.callback-form').hide();
    });
  })

  // бургер
  $(function burgerMenu() {
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
    $(window).on('resize', function() {
      let win = $(this);
      if (win.height() <= 1024) {
        $('.header__link').on('click', function(event) {
          $('.header__header-nav').hide();
        });
      }
    })
  });

  //Плавный скролл
  $(function scrollSite() {
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      let t = 1000;
      let d = $(this).attr('href');
      $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
  });

  //Маска ввода
  $(function maskIn() {
    $('.callback-form__phone--phone').inputmask({ "mask": "+7(999) 999-9999" });
  });

  // слайдер
  $(function slide() {
    let mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
      slidesPerView: 3,
      spaceBetween: 40,
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
          spaceBetween: 50,
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
  })

  //Кнопка вверх
  $(function btnTop() {
    let btnUp = $('.btn-up');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btnUp.addClass('show');
      } else {
        btnUp.removeClass('show');
      }
    });
    btnUp.on('click', function(e) {
      $('html, body').animate({ scrollTop: 0 }, '300');
    });
  });

})