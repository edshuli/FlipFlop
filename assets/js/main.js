$(".fa").mouseenter(function() {
    $(this).addClass("changeColor");
});

$(".fa").mouseleave(function() {
    $(this).removeClass("changeColor");
});

$("h5").mouseenter(function() {
    $(this).addClass("highLight");
});

$("h5").mouseleave(function() {
    $(this).removeClass("highLight");
});

//we use http://iamceege.github.io/tooltipster/ the tootipster site for this function
$(document).ready(function() {
    $('.tooltip').tooltipster();
});


