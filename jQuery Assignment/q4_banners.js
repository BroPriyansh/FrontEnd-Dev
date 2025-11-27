// q4_banners.js
// jQuery controls show/hide/slide/fade and automatic rotation using fadeIn/fadeOut.
$(function(){
  // Initially show all banners
  $('#banners .banner').show();

  $('#hide').on('click', function(){
    $('#banners .banner').hide();
  });

  $('#show').on('click', function(){
    $('#banners .banner').show();
  });

  $('#slide-toggle').on('click', function(){
    $('#banners .banner').slideToggle();
  });

  $('#fade-toggle').on('click', function(){
    $('#banners .banner').fadeToggle();
  });

  // Automatically rotate through banners every 5 seconds using fadeIn/fadeOut
  let idx = 0;
  const banners = $('#banners .banner');
  function rotate(){
    banners.stop(true,true).hide();
    $(banners.get(idx)).fadeIn(600);
    idx = (idx + 1) % banners.length;
  }
  rotate();
  setInterval(rotate, 5000);
});
