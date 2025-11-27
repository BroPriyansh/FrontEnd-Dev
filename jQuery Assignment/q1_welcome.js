// q1_welcome.js
// jQuery used for DOM ready, event handling, and simple effects.
$(function(){
  // On page load -> personalized greeting based on time of day
  const hour = new Date().getHours();
  let period = 'Evening';
  if (hour < 12) period = 'Morning';
  else if (hour < 17) period = 'Afternoon';
  $('#greeting').text(`Good ${period}, Visitor!`);

  // When greeting clicked -> show an alert
  $('#greeting').on('click', function(){
    alert('Nice to see you! Have a productive day.');
  });

  // Change Greeting button -> motivational quote
  $('#change-greet').on('click', function(){
    $('#greeting').text('Believe you can and you're halfway there. — Theodore Roosevelt');
  });

  // Toggle visibility of welcome message
  $('#toggle-welcome').on('click', function(){
    // toggle() hides/shows element smoothly
    $('#welcome-msg').toggle();
  });
});
