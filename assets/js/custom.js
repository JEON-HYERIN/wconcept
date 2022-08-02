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
      // autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: "fraction",
      },
    });
});