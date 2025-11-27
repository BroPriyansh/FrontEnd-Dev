// q9_multi.js
// Demonstrates using two versions of jQuery with noConflict.
// jQuery 1 will be used for carousel, jQuery 3 for modals and tooltips.

var jq1 = jQuery.noConflict(true); // takes the first loaded jQuery (1.12.4) into jq1
// At this point, global jQuery/$ refer to the later loaded 3.6.0

// Version 1 functionality (carousel rotation)
jq1(function(){
  var idx = 0;
  var items = ['Slide 1','Slide 2','Slide 3'];
  setInterval(function(){
    idx = (idx + 1) % items.length;
    jq1('#carousel').text(items[idx]);
  }, 2000);
});

// Version 2 functionality (modals and tooltips) using global jQuery (3.x)
jQuery(function($){
  // Manage modal popups (simple simulation)
  $('#modal').on('click', function(){
    const overlay = $('<div class="overlay">Modal: Notification<button class="close">Close</button></div>');
    $('body').append(overlay);
    overlay.css({position:'fixed',left:0,top:0,right:0,bottom:0,background:'rgba(0,0,0,0.5)',color:'#fff',padding:'40px', 'text-align':'center'});
    overlay.find('.close').on('click', function(){ overlay.remove(); });
  });

  // Highlight active widget (version 2)
  $('#widgets .widget').on('click', function(){
    $('#widgets .widget').removeClass('active');
    $(this).addClass('active');
  });

  // Attach tooltips on hover
  $('#widgets .widget').hover(function(){
    const tip = $('<div class="tip">'+ $(this).text() +'</div>');
    $('body').append(tip);
    tip.css({position:'absolute',left: event.pageX+10, top:event.pageY+10, padding:'6px', border:'1px solid #ccc', background:'#fff'});
    $(this).data('tip', tip);
  }, function(){
    const tip = $(this).data('tip');
    if(tip) tip.remove();
  });
});
