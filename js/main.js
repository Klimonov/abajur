$(document).ready(function() {
    $('.scroll-up').click(function(){
        $(this).addClass('active');
       $('html, body').animate({scrollTop:$('#scroll').position().top - 60}, 1000);
    });
});