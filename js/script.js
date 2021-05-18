$('#ham_js').on('click', function(){
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('.hamburger-menu').css({
            'visibility': 'visible',
            'opacity': 1
        });
    } else {
        $('.hamburger-menu').css({
            'visibility': 'hidden',
            'opacity': 0
        });
    }
    return false;
});

$('.plan-list').slick({
  autoplay:true,
  autoplayspeed:5000,
  dots:true,
  arrows:false,
  centerMode: true,
  centerPadding: '88px',
  variableWidth: true,
});

$('.accordion__title').on('click', function(){
    $(this).toggleClass('open');
    $(this).next().slideToggle();
  });
