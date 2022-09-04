$(function () {
  // a태그 기본동작 방지
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  $(window).scroll(function () {
    const currentScroll = $(this).scrollTop();
    const stickyNav = $('.sticky-nav').offset().top;

    if (currentScroll >= stickyNav) {
      $('.sticky-nav').addClass('fixed');
    } else {
      $('.sticky-nav').removeClass('fixed');
    }
  });

  // mdpick
  setBorder('.sc-mdpick');
  $('.sc-mdpick .btn-category').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.sc-mdpick .category-item').click(function () {
    idx = $(this).index();
    mdpickSwiper1.slideTo(idx);
    mdpickSwiper2.slideToLoop(idx);


    let left = $(this).position().left;
    let width = $(this).find('.btn-category').width();

    $('.sc-mdpick .category-bar').css({
      'left': left,
      'width': width
    });
  })

  // trend
  $('.sc-trend .btn-tag').click(function () {
    const dataType = $(this).data('type');
    $('.sc-trend .btn-tag').removeClass('active');
    $(this).addClass('active');
    $(dataType).addClass('visible').siblings('.group-trend').removeClass('visible');
  });

  // style
  $('.sc-style .btn-category').click(function (e) {
    e.preventDefault();
    const dataType = $(this).data('type');

    $('.sc-style .btn-category').removeClass('active');
    $(this).addClass('active');
    $(dataType).addClass('visible').siblings('.product-list-wrap').removeClass('visible');
  });

  const barWidth = $('.sc-special .category-item:first-child .btn-category').width();
  const barPosition = $('.sc-special .category-item:first-child .btn-category').position().left;
  $('.category-bar').css({
    'width': barWidth,
    'left': barPosition
  });

  // special
  setBorder('.sc-special');
  $('.sc-special .btn-category').click(function () {
    const dataType = $(this).data('type');

    $('.sc-special .btn-category').removeClass('active');
    $(this).addClass('active');
    $(dataType).addClass('visible').siblings('.product-list-wrap').removeClass('visible');

    const left = $(this).position().left;
    const width = $(this).find('.btn-category').width();

    $('.sc-special .category-bar').css({
      'left': left,
      'width': width
    });
  });

  // ranking
  setBorder('.sc-ranking');
  $('.sc-ranking .btn-category').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.sc-ranking .category-item').click(function () {
    idx = $(this).index();
    mdpickSwiper1.slideTo(idx);
    mdpickSwiper2.slideToLoop(idx);


    let left = $(this).position().left;
    let width = $(this).find('.btn-category').width();

    $('.sc-ranking .category-bar').css({
      'left': left,
      'width': width
    });
  })
  
  let repeat = '';

  $('.sc-ranking .btn-tab').click(function () {
    const dataType = $(this).data('type');

    $(this).addClass('active').siblings().removeClass('active');
    $(dataType).addClass('visible').siblings('.tab-content').removeClass('visible');
  });

  rankRepeatInit = function () {
    clearInterval(repeat);
    num = 0;
    $('.sc-ranking .swiper-slide-active .inner-swiper .swiper-slide-active .brand-item').removeClass("active");
    $('.sc-ranking .swiper-slide-active .inner-swiper .swiper-slide-active .brand-item').eq(0).addClass('active');
    rankRepeat();
  };

  let num = 0;
  rankRepeat = function () {
    repeat = setInterval(function () {
      $('.sc-ranking .swiper-slide-active .inner-swiper .swiper-slide-active .brand-item').removeClass("active");
      $('.sc-ranking .swiper-slide-active .inner-swiper .swiper-slide-active .brand-item').eq(num).addClass('active');
      num === 4 ? num = 0 : num++;
    }, 2000)
  };
  rankRepeat();

  $('.sc-ranking .btn-brand').click(function () {
    // rankRepeatInit();
  });

  // floating-nav
  let lastScroll = 0;
  $(window).scroll(function () {
    const currentScroll = $(this).scrollTop();
    if (currentScroll > lastScroll) {
      $('.floating-nav').addClass('invisible');
    } else {
      $('.floating-nav').removeClass('invisible');
    }
    lastScroll = currentScroll;

    if (currentScroll > 500) {
      $('.floating-nav .link-history').addClass('active');
      gsap.to('.floating-nav .btn-top', {
        display: 'block',
        duration: 0,
      })
    } else {
      $('.floating-nav .link-history').removeClass('active');
      gsap.to('.floating-nav .btn-top', {
        display: 'none',
        duration: 0,
      })
    }
  });

  // btn-top
  $('.floating-nav .btn-top').click(function () {
    $('html, body').stop().animate({
      scrollTop: '0'
    }, 500);
  });

  // category-bar
  function setBorder(selector) {
    let $selector = $(selector);
    let barWidth = $selector.find('.category-item:first-of-type').width();
    let barPosition = $selector.find('.category-item:first-of-type').position().left;
    $selector.find('.category-bar').css({
      'width': Math.round($selector.find('.category-item:first-of-type').width()),
      'left': barPosition
    });
  }
});