// q8_blog.js
// Uses append/prepend/remove and before/after for tags; highlights posts containing keywords.
$(function(){
  $('#add-post').on('click', function(){
    $('#posts').append('<li class="post">New Post ' + Date.now() + '</li>');
  });

  $('#prepend-featured').on('click', function(){
    $('#posts').prepend('<li class="post featured">Featured: Today\'s highlight</li>');
  });

  $('#remove-last').on('click', function(){
    $('#posts .post').last().remove();
  });

  // Add tags to posts using before/after
  $('#posts').on('click', '.post', function(){
    const tag = $('<span class="tag">[post]</span>');
    $(this).after(tag);
  });

  // Highlight posts with specific keywords dynamically (e.g., "release")
  $('#posts .post').each(function(){
    if($(this).text().toLowerCase().indexOf('release') !== -1){
      $(this).css('background','#fffbcc');
    }
  });
});
