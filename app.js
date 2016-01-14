$(document).ready(function(){
        $('.project_card').mousedown(function() {
    $(this).addClass('active');
    });
  $('.close').on('click',function() {
      $('.project_wrap').removeClass('active');
    });
  $(".over").on('click', function() {
    $(this).addClass('.overlay');
   });
  
});


