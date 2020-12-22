
const previous = '<img src = "assets/photo/left-arrow-white.svg" alt:"left">';
const next = '<img src = "assets/photo/right-arrow-white.svg" alt:"right">';

$(document).ready(function()
{
    $("#owl-2").each(function() 
    {
        $(this).owlCarousel
        ({
            items: 4,
            loop:true,
            margin:70,
            smartSpeed: 1400,
            nav: true,
            navText: [
                previous,
                next
            ],
            responsive: {
                0:{
                    items: 1
                },
                500:{
                    items: 2
                },
                900:{
                    items: 3
                },
                1200:{
                    items: 4
                }
            }
        });
    });
});

$("#navToggle").click(function(){
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
});

$(".overlay a").click(function () {
    $("#navToggle").toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked");
});
