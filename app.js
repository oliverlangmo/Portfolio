$(document).ready(function(){
        $('.project_wrap').mousedown(function() {
    $(this).addClass('active');
    });
  $('.close').on('click',function() {
      $('.project_wrap').removeClass('active');
    });
});
$(function(){
    $(window).scroll(function() { 
        if ($(this).scrollTop() > 300) { 
            $(".nav_wrap").css('visibility','visible');   
            $(".nav_wrap").fadeIn('slow');  
        } 
        else {     
            $(".nav_wrap").fadeOut("slow"); 
        }  
    });
});
