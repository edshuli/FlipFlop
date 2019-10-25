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
  if ($(window).scrollTop() >= 550) {
    myNav.addClass("scroll");
  }
  else {
    myNav.removeClass("scroll");
  }
});


$("input").mouseenter(function() {
  $(".searchButton").addClass("borderColor");
});
$("input").mouseleave(function() {
  $(".searchButton").removeClass("borderColor");
});



//function initMap() {
//  var map = new google.maps.Map(document.getElementById("map"), {
//    zoom: 3,
//    center: {
//      lat: 46.619261,
//      lng: -33.134766
//    }
//  });
//}


var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.triposo.com/api/20190906/location.json?<ZNP76WBG>&token=<4vkqxzy5ob3vu3lqh617fzxkzygqwe>");

xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
    };
}

setTimeout(function() {
    console.log(data);
}, 500);


