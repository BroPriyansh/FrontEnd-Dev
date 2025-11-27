// q10_register.js
// Client-side validation using jQuery: checking emptiness, email format, password length,
// and dynamic styling for invalid fields. Simulates uniqueness check locally.
$(function(){
  // simulated existing emails
  const existing = ['test@example.com','user@domain.com'];

  function validateEmail(email){
    // simple regex for demonstration
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  $('#reg-form').on('submit', function(e){
    e.preventDefault();
    let ok = true;
    $('#result').text('');
    // Reset styles
    $('#reg-form input').removeClass('invalid');

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const pw = $('#password').val();

    // Check Name field -> not empty
    if(!name){
      ok = false;
      $('#name').addClass('invalid');
    }

    // Check Email field -> valid format and uniqueness
    if(!validateEmail(email) || existing.indexOf(email.toLowerCase()) !== -1){
      ok = false;
      $('#email').addClass('invalid');
    }

    // Check Password -> minimum 8 characters
    if(!pw || pw.length < 8){
      ok = false;
      $('#password').addClass('invalid');
    }

    if(ok){
      $('#result').text('Registration successful!').css('color','green');
    } else {
      $('#result').text('Please correct highlighted fields.').css('color','red');
    }
  });
});
