// q7_search.js
// Real-time filtering using keyup, CSS highlighting matches, toggling visibility, and updating count.
$(function(){
  $('#search').on('keyup', function(){
    const val = $(this).val().toLowerCase();
    let matched = 0;
    $('#courses .course').each(function(){
      const text = $(this).text();
      if(val && text.toLowerCase().indexOf(val) !== -1){
        // highlight matched text by wrapping <mark> or applying css
        const regex = new RegExp('('+val.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')+')', 'ig');
        $(this).html(text.replace(regex, '<span class="highlight">$1</span>'));
        $(this).show();
        matched++;
      } else if(!val){
        $(this).html(text).show();
      } else {
        $(this).hide();
      }
    });
    $('#count').text('Matched: ' + matched);
  });

  // Clear search -> reset list to show all courses
  $('#clear').on('click', function(){
    $('#search').val('');
    $('#courses .course').show().each(function(){
      $(this).html($(this).text());
    });
    $('#count').text('Matched: ' + $('#courses .course').length);
  });

  // initialize count
  $('#count').text('Matched: ' + $('#courses .course').length);
});
