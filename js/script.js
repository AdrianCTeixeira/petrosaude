$(document).ready(function(){
  $(".1").click(function() {
    $('html, body').animate({
      scrollTop: ($("#home").offset().top-160)+'px'
    }, 600);
  });
  $(".2").click(function() {
    $('html, body').animate({
      scrollTop: ($("#quemsomos").offset().top-80)+'px'
    }, 600);
  });
  $(".3").click(function() {
    $('html, body').animate({
      scrollTop: ($("#profissionais").offset().top-80)+'px'
    }, 1000);
  });
  $('.nav-list').on('click', 'li', function() {
    $('.nav-list li.active').removeClass('active');
    $(this).addClass('active');
  });  
});

$(window).on('scroll', function () {
  var x = 1;
  var home = $('.home');
  console.log(x);
  if(home.offset)
  a.addclass('.active');
});