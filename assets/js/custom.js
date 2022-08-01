$(function(){
    // a태그 기본동작 방지
    $(document).on('click', 'a[href="#"]', function (e) {
      e.preventDefault();
    });

    $(window).scroll(function(){
      const currentScroll = $(this).scrollTop();
      const gnb = $('#gnb').offset().top;

      if(currentScroll >= gnb){
        $('#gnb').addClass('fixed');
      } else {
        $('#gnb').removeClass('fixed');
      }
    });

    // swiper
    const gnbSwiper = new Swiper('#gnb .swiper', {
      slidesPerView: 'auto'
    });
});