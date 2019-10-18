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

//Took this from stackoverflow
var myNav = $(".navbar");

$(window).on('scroll', function() {
  "use strict";
  if ($(window).scrollTop() >= 280) {
    myNav.addClass("scroll");
  } else {
    myNav.removeClass("scroll");
  }
});


$("input").mouseenter(function() {
    $(".searchButton").addClass("borderColor");
});

$("input").mouseleave(function() {
    $(".searchButton").removeClass("borderColor");
})

$("searchButton").click(function() {
    $(".form-inline").addClass("borderColor");
});