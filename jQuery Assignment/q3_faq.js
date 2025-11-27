// q3_faq.js
// jQuery toggles answers, handles hover colors, double-click to collapse all,
// and focuses/blurs on inputs to highlight parent question.
$(function(){
  // Click on question -> toggle answer visibility
  $('#faq').on('click', '.q', function(){
    $(this).next('.a').slideToggle(150);
  });

  // Hover -> change question color
  $('#faq').on('mouseenter', '.q', function(){
    $(this).css('color', '#1e90ff');
  }).on('mouseleave', '.q', function(){
    $(this).css('color', '');
  });

  // Double-click question -> collapse all answers
  $('#faq').on('dblclick', '.q', function(){
    $('#faq .a').slideUp(200);
  });

  // Focus on answer input -> highlight parent question
  $('#faq').on('focus', '.ans-input', function(){
    $(this).closest('.qa').find('.q').css('background','#fffbcc');
  });

  // Blur from input -> reset background color
  $('#faq').on('blur', '.ans-input', function(){
    $(this).closest('.qa').find('.q').css('background','');
  });
});
