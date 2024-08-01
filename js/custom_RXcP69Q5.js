/* Example Custom scrollbar (#2) */

  $(function(){
    // custom scroll
    // More settings you can find here: http://manos.malihu.gr/jquery-custom-content-scroller/
    $(".mCustomScrollbar").mCustomScrollbar({
      theme:"inset",
      scrollInertia:0,
      callbacks:{
        onTotalScroll: function(){
          window.changeSlide('increase');
        },
        onTotalScrollBack: function(){
          window.changeSlide('decrease');
        }
      }
    });
    $(window).on('slideChange',function(){
      $('.mCustomScrollbar').mCustomScrollbar("scrollTo","top");
    });
  });