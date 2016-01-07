$(document).ready(function() {
    
    $(window).scroll(function(event){
        var scroll = $(window).scrollTop();
        $("h1.scroll").text(scroll);
    });
    
});
