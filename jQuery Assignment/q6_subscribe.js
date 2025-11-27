// q6_subscribe.js
// Demonstrates dynamic event attach/detach with .on() and .off(), and DOM insertion for messages.
$(function(){
  function showMessage(text){
    $('#messages').text(text).fadeIn(200).delay(1200).fadeOut(400);
  }

  // Subscribe -> enable notifications (visual feedback)
  $('#topics').on('click', '.subscribe', function(){
    $(this).closest('li').css('font-weight','bold');
    showMessage('Subscribed successfully');
  });

  // Unsubscribe -> disable notifications
  $('#topics').on('click', '.unsubscribe', function(){
    $(this).closest('li').css('font-weight','normal');
    showMessage('Unsubscribed');
  });

  // Dynamically add new subscription topics -> attach .on() ensures events work for new items
  $('#add-topic').on('click', function(){
    const name = $('#new-topic').val().trim();
    if(name){
      const li = $('<li>').text(name + ' ');
      li.append('<button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button>');
      $('#topics').append(li);
      $('#new-topic').val('');
      showMessage('Topic added: ' + name);
    }
  });

  // Remove specific subscription -> detach .off() example (removes click handlers from unsubscribe buttons temporarily)
  $('#messages').on('click', '.remove-unsubscribe-handlers', function(){
    $('#topics .unsubscribe').off('click');
    showMessage('Unsubscribe handlers removed');
  });
});
