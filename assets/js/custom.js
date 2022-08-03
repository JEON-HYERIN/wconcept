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
    
    const mdpickSwiper1 = new Swiper('.sc-mdpick .category-list-wrap.swiper', {
      // loop: true,
      slidesPerView: 'auto',
      slideToClickedSlide: true
    });
    
    const mdpickSwiper2 = new Swiper('.sc-mdpick .product-list-wrap.swiper', {
      loop: true,
    });
    
    mdpickSwiper1.on('slideChange', function () {
        idx = mdpickSwiper1.realIndex;
        mdpickSwiper2.slideToLoop(idx);
    });

    $('.sc-mdpick .category-item .btn-category').click(function(e){
      e.preventDefault();
      $(this).parent().addClass('selected').siblings().removeClass('selected');
    });
});