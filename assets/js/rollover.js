$(function() {

    var name = "";
    
    $(".single-guy").css("opacity", 0);
    
    $(".home-roll-box").hover(function() {
        name = $(this).attr("id");
        $("#image-"+name).stop(true, false).show().animate({ opacity: 1 });
    }, function() {
        name = $(this).attr("id");
        $("#image-"+name).stop(true, false).animate({ opacity: 0 }).hide();
    });

});