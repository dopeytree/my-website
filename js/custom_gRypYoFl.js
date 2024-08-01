/* Enviroment (#8) */

$(function() {
    $(window).resize( function(){
      var theWidth = $(window).width(),
          theHeight = $(window).height(),
          videoProportions = 16/9,
          newWidth = (theHeight*videoProportions),
          newHeight = (theWidth/videoProportions);
      if ( (theWidth > 1280) && (newHeight > theHeight )) {
        $('.background.vimeo iframe').css({'width':theWidth, 'height':newHeight});
      }
      if ( (theHeight > 720) && (newWidth > theWidth )) {
        $('.background.vimeo iframe').css({'height':theHeight, 'width':newWidth});
      }
    }).resize();
    // mute audio
    var vimeo_iframe = $('.background.vimeo iframe')[0];
		var player = new Vimeo.Player(vimeo_iframe);
  	player.setVolume(0);
});