$(document).ready(function(){
        $('.project_wrap').mousedown(function() {
    $(this).addClass('active');
    });
  $('.close').on('click',function() {
      $('.project_wrap').removeClass('active');
    });
});
