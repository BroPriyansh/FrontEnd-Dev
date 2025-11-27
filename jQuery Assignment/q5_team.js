// q5_team.js
// jQuery demonstrates traversal methods: .children(), .next(), .parent(), .find() to
// highlight reports, show contacts, and collapse/expand teams.
$(function(){
  // Click a manager -> highlight all direct reports
  $('#departments').on('click', '.mgr', function(e){
    e.stopPropagation();
    // find direct report .member elements inside .reports
    $(this).closest('.department').find('.member').removeClass('highlight');
    $(this).find('.reports .member').addClass('highlight');
  });

  // Hover on an employee -> show contact info using .next() / .find()
  $('#departments').on('mouseenter', '.member', function(){
    $(this).children('.contact').show();
  }).on('mouseleave', '.member', function(){
    $(this).children('.contact').hide();
  });

  // Click on a department -> change background of all members in that department using .children()
  $('#departments').on('click', '.dept-title', function(){
    $(this).closest('.department').find('.member').css('background','#f7f7f7');
  });

  // Select a random employee -> highlight sibling employees
  $('#random-employee').on('click', function(){
    const all = $('#departments .member').not('.mgr');
    const picked = $(all.get(Math.floor(Math.random()*all.length)));
    // highlight siblings
    picked.siblings('.member').addClass('highlight');
  });

  // Collapse/expand team using .parent() and .find()
  $('#toggle-team').on('click', function(){
    $('#departments .members').each(function(){
      $(this).children().toggle();
    });
  });
});
