$(".fa").mouseenter(function() {
  $(this).addClass("changeColor");
});

$(".fa").mouseleave(function() {
  $(this).removeClass("changeColor");
});

$(".cardTitle").mouseenter(function() {
  $(this).addClass("highLight");
});

$(".cardTitle").mouseleave(function() {
  $(this).removeClass("highLight");
});


//we use http://iamceege.github.io/tooltipster/
//the tootipster site for this function
$(document).ready(function() {
  $('.toolPin').tooltipster();

});


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
});





//Start creating Map
var map;
var service;
var currentLoc = null;


//Create a function for the different types of choice
function showLocInfo(locType) {
  console.log(locType, currentLoc);
  if (currentLoc != null) {
    var curr_loc = new google.maps.LatLng(currentLoc.lat, currentLoc.lng);
    map = new google.maps.Map(document.getElementById('map'), {
      center: curr_loc,
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

    var request = {
      location: curr_loc,
      radius: '1500',
      type: locType
    };

    console.log(request);

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

//Create new markers for the selected  type
  function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      title: place.name,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
    });
  }
  

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        console.log(results[i]);
        createMarker(results[i]);
        
      }
    }
  }

}




//Create a Map
function initMap() {
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
        currentLoc = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
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
    }

    map.fitBounds(bounds);
    searchBox.set('map', map);
    map.setZoom(Math.min(map.getZoom(), 13));

  });


}

google.maps.event.addDomListener(window, 'load', initMap);