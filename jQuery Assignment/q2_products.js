// q2_products.js
// jQuery is used for delegated event handling, attribute selectors, and simple UI feedback.
$(function(){
  // Click on a product -> highlight background
  $('#products').on('click', '.product', function(){
    $('.product').removeClass('highlight'); // remove from others
    $(this).addClass('highlight');
    // If out of stock -> alert (check data-stock)
    const stock = parseInt($(this).attr('data-stock') || '0', 10);
    if (stock === 0) {
      alert($(this).attr('data-name') + ' is out of stock!');
    }
  });

  // Hover over a product -> show additional product details
  $('#products').on('mouseenter', '.product', function(){
    $(this).find('.more-info').slideDown(150);
  }).on('mouseleave', '.product', function(){
    $(this).find('.more-info').slideUp(150);
  });

  // Clicking a "Favorite" icon -> toggles "selected" class
  $('#products').on('click', '.favorite', function(e){
    e.stopPropagation(); // prevent triggering product click
    $(this).toggleClass('selected');
    // toggle text
    $(this).text($(this).hasClass('selected') ? '❤' : '♡');
  });

  // Apply different styles to products with discounts using attribute selector
  // We add class 'discount' to any .product that has data-discount attribute
  $('.product[data-discount]').each(function(){
    $(this).addClass('discount');
  });
});
