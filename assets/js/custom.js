$(function(){
    // a태그 기본동작 방지
    $(document).on('click', 'a[href="#"]', function (e) {
      e.preventDefault();
    });

    $(window).scroll(function(){
      const currentScroll = $(this).scrollTop();
      const stickyNav = $('.sticky-nav').offset().top;

      if(currentScroll >= stickyNav){
        $('.sticky-nav').addClass('fixed');
      } else {
        $('.sticky-nav').removeClass('fixed');
      }
    });

    // swiper
    const gnbSwiper = new Swiper('#gnb .swiper', {
      slidesPerView: 'auto'
    });

    const visualSwiper = new Swiper('.sc-visual .swiper', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: "fraction",
      },
    });

    const saleSwiper = new Swiper('.sc-sale .swiper', {
      slidesPerView: 'auto',
    });

    const showroomSwiper = new Swiper('.sc-showroom .swiper', {
      slidesPerView: 'auto',
    });
    const exclusiveSwiper = new Swiper('.sc-exclusive .swiper', {
      spaceBetween: 8,
    });
    const stylepickSwiper = new Swiper('.sc-stylepick .swiper', {
      spaceBetween: 8,
    });
    const issueSwiper = new Swiper('.sc-issue .swiper', {
      spaceBetween: 8,
    });
    const beautypickSwiper = new Swiper('.sc-beautypick .swiper', {
      spaceBetween: 8,
    });
    const updateSwiper = new Swiper('.sc-update .swiper', {
      slidesPerView: 'auto',
    });
    const specialSwiper = new Swiper('.sc-special .swiper', {
      slidesPerView: 'auto',
      observer: true, 
      observeParents: true,
    });
    const themeSwiper1 = new Swiper('.sc-theme .swiper1', {
      slidesPerView: 'auto',
    });
    const themeSwiper2 = new Swiper('.sc-theme .swiper2', {
      slidesPerView: 'auto',
    });
    const themeSwiper3 = new Swiper('.sc-theme .swiper3', {
      slidesPerView: 'auto',
    });
    const themeSwiper4 = new Swiper('.sc-theme .swiper4', {
      slidesPerView: 'auto',
    });
    const themeSwiper5 = new Swiper('.sc-theme .swiper5', {
      slidesPerView: 'auto',
    });
    const themeSwiper6 = new Swiper('.sc-theme .swiper6', {
      slidesPerView: 'auto',
    });
    const themeSwiper7 = new Swiper('.sc-theme .swiper7', {
      slidesPerView: 'auto',
    });
    const themeSwiper8 = new Swiper('.sc-theme .swiper8', {
      slidesPerView: 'auto',
    });
    const themeSwiper9 = new Swiper('.sc-theme .swiper9', {
      slidesPerView: 'auto',
    });
    const themeSwiper10 = new Swiper('.sc-theme .swiper10', {
      slidesPerView: 'auto',
    });
    const specialpriceSwiper = new Swiper('.sc-specialprice .swiper', {
      loop: true,
      pagination: {
        el: ".sc-specialprice .swiper-pagination",
        type: "fraction",
      },
    
      navigation: {
        prevEl: '.sc-specialprice .swiper-button-prev',
        nextEl: '.sc-specialprice .swiper-button-next',
      },
    });
    const makeityoursSwiper = new Swiper('.sc-makeityours .swiper', {
      pagination: {
        el: ".sc-makeityours .swiper-pagination",
        clickable: true
      },
    });
    const wconceptTVSwiper = new Swiper('.sc-wconceptTV .swiper', {
      autoplay: true,
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      pagination: {
        el: ".sc-wconceptTV .swiper-pagination",
        type: "fraction",
      },
    
      navigation: {
        prevEl: '.sc-wconceptTV .swiper-button-prev',
        nextEl: '.sc-wconceptTV .swiper-button-next',
      },
    });
    const wconceptTVSwiper2 = new Swiper('.sc-wconceptTV .swiper-back', {
      effect: 'fade',
      touchRatio: 0,
    });
    wconceptTVSwiper.on('slideChange', function () {
      idx = wconceptTVSwiper.realIndex;
      wconceptTVSwiper2.slideToLoop(idx);
  });

    const mdpickSwiper1 = new Swiper('.sc-mdpick .category-list-wrap.swiper', {
      // loop: true,
      slidesPerView: 'auto',
    });
    
    const mdpickSwiper2 = new Swiper('.sc-mdpick .swiper', {
      loop: true,
    });
    const mdpickSwiper3 = new Swiper('.sc-mdpick .inner-swiper', {
      loop: true,
    });
    
    mdpickSwiper1.on('slideChange', function () {
        idx = mdpickSwiper1.realIndex;
        mdpickSwiper2.slideToLoop(idx);
    });
    const styleSwiper = new Swiper('.sc-style .product-list-wrap', {
      slidesPerView: 'auto',
      observer: true, 
      observeParents: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });
    const styleSwiper2 = new Swiper('.sc-style .category-list-wrap', {
      slidesPerView: 'auto',
      speed: 1500
    });

    // mdpick
    $('.sc-mdpick .btn-category').click(function(){
      const dataType=$(this).data('type');
      $('.sc-mdpick .btn-category').removeClass('active');
      $(this).addClass('active');
      $(dataType).addClass('visible').siblings('.product-list-wrap').removeClass('visible');
    });

    // trend
    $('.sc-trend .btn-tag').click(function(){
      const dataType=$(this).data('type');
      $('.sc-trend .btn-tag').removeClass('active');
      $(this).addClass('active');
      $(dataType).addClass('visible').siblings('.group-trend').removeClass('visible');
    });

    $('.sc-special .category-border').css({
      left: $('.sc-special .btn-category.active').position().left,
      width: Math.round($('.sc-special .btn-category.active').width())
    });

    // style
    $('.sc-style .btn-category').click(function(e){
      e.preventDefault();
      const dataType=$(this).data('type');

      $('.sc-style .btn-category').removeClass('active');
      $(this).addClass('active');
      $(dataType).addClass('visible').siblings('.product-list-wrap').removeClass('visible');
    });

    // special
    $('.sc-special .btn-category').click(function(){
      const dataType=$(this).data('type');

      $('.sc-special .btn-category').removeClass('active');
      $(this).addClass('active');
      $(dataType).addClass('visible').siblings('.product-list-wrap').removeClass('visible');

      // special category-border
      const activeLeft = $('.sc-special .btn-category.active').position().left;
      const activeWidth = $('.sc-special .btn-category.active').width();

      $('.sc-special .category-border').css({
        left: activeLeft,
        width: Math.round(activeWidth)
      });
    });

    // ranking
    const rankingSwiper1 = new Swiper('.sc-ranking .category-list-wrap', {
      slidesPerView: 'auto',
      speed: 1500,
      observer: true, 
      observeParents: true,
    });
    const rankingSwiper2 = new Swiper('.sc-ranking .tab-content .swiper', {
      pagination: {
        el: ".sc-ranking .tab-content .swiper-pagination",
        clickable: true
      },
      observer: true, 
      observeParents: true,
    });

    $('.sc-ranking .btn-category').click(function(e){
      e.preventDefault();
      const dataType=$(this).data('type');

      $('.sc-ranking .btn-category').removeClass('active');
      $(this).addClass('active');
      $(dataType).addClass('visible').siblings('.swiper').removeClass('visible');

      // ranking category-border
      const activeLeft = $('.sc-ranking .btn-category.active').offset().left;
      const activeWidth = $('.sc-ranking .btn-category.active').width();

      $('.sc-ranking .category-border').css({
        'left': activeLeft,
        'width': Math.round(activeWidth)
      });
    });

    $('.sc-ranking .btn-tab').click(function(){
      const dataType=$(this).data('type');

      $(this).addClass('active').siblings().removeClass('active');
      $(dataType).addClass('visible').siblings('.tab-content').removeClass('visible');
    });

    let isTimerOn = true;
    let timer = '';
    repeatImage();
    function repeatImage() {
      let num = 0;
      // const length = $('.sc-ranking .swiper-slide-active .brand-item').length;
      $('.sc-ranking .swiper-slide-active .brand-item').eq(num).addClass('active');
      
    if(isTimerOn === true) {
      const timer = setInterval(function(){
        if(num < 5) {
            num++;
        }
        else {
            num = 0;
        }   
        $('.sc-ranking .swiper-slide-active .brand-item').removeClass('active');
        $('.sc-ranking .swiper-slide-active .brand-item').eq(num).addClass('active');
      }, 2000)
    }
  }

    $('.sc-ranking .btn-brand').click(function(){
      if(isTimerOn === true){
        $(this).parent().addClass('active').siblings().removeClass('active');
        clearInterval(timer);
        isTimerOn = false;
      }else {
        isTimerOn = true;
      }
    });

    // floating-nav
    let lastScroll = 0;
    $(window).scroll(function(){
      const currentScroll = $(this).scrollTop();
      if(currentScroll > lastScroll) {
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
    $('.floating-nav .btn-top').click(function(){
      $('html, body').stop().animate({scrollTop: '0'}, 500);
    });
});