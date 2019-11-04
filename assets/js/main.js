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

//we use http://iamceege.github.io/tooltipster/
//the tootipster site for this function
$(document).ready(function() {
  $('.toolPin').tooltipster();

});

// Tooltips Initialization
//$(function () {
//$('[data-toggle="tooltip"]').tooltip()
//})

//Took this from stackoverflow
var myNav = $(".navbar");

$(window).on('scroll', function() {
  "use strict";
  if ($(window).scrollTop() >= 400) {
    myNav.addClass("scroll");
  }
  else {
    myNav.removeClass("scroll");
  }
});

$("button").click(function() {
  $(".navbar-collapse").addClass("scroll");
})


$("input").mouseenter(function() {
  $(".searchButton").addClass("borderColor");
});
$("input").mouseleave(function() {
  $(".searchButton").removeClass("borderColor");
});




var currentLoc = [];

function show_loc_info(locType) {
  console.log(locType, currentLoc);
}




//Create a Map
function init() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 52.379189,
      lng: 4.899431
    },
    zoom: 14,
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['styled_map']
    },
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  });


  //Create searchbox
  var searchBox = new google.maps.places.SearchBox(document.getElementById('pac-input'));
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    searchBox.set('map', null);


    var places = searchBox.getPlaces();

    var bounds = new google.maps.LatLngBounds();
    var i, place, icon;
    
    for (i = 0; place = places[i]; i++) {
      (function(place) {
        console.log(place.geometry.location);
        var marker = new google.maps.Marker({
          icon: icon,
          title: place.name,
          position: place.geometry.location
        });
        
        marker.bindTo('map', searchBox, 'map');
        google.maps.event.addListener(marker, 'map_changed', function() {
          if (!this.getMap()) {
            this.unbindAll();
          }
        });
        bounds.extend(place.geometry.location);

      }(place));
      currentLoc = place;
    }

    map.fitBounds(bounds);
    searchBox.set('map', map);
    map.setZoom(Math.min(map.getZoom(), 12));

  });
}
google.maps.event.addDomListener(window, 'load', init);
