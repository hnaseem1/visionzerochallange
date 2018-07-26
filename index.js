
var masterlist = []
var filterlist = []
var response = $.ajax({
  url: 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {

  masterlist = data.features
  filterlist = data.features
  reset(data)
  initMap();

  //----------------------------- filters ----------------------------- //
  var allcollisions           = document.querySelector("input[value='allcollisions']");

  var pedestriansFilter       = document.querySelector("input[value='pedestrians']");
  var cyclistsFilter          = document.querySelector("input[value='cyclists']");
  var motorcyclesFilter       = document.querySelector("input[value='motorcycles']");
  var motoristsFilter         = document.querySelector("input[value='motorists']");

  var allfactors              = document.querySelector("input[value='allfactors']");

  var aggressiveDrivingFilter = document.querySelector("input[value='aggresive-driving']");
  var alcoholFilter           = document.querySelector("input[value='alcohol']");
  var speedingFilter          = document.querySelector("input[value='speeding']");
  var ranRedLightFilter       = document.querySelector("input[value='ran-red-light']");

  var roadClosuresConstruction = document.querySelector("input[value='road-closures-construction']");
  var majorCulturalEvent      = document.querySelector("input[value='major-cultural-event']");

  var resetFilter             = document.getElementById('reset_filters');

  var map
  var markers = []


  allcollisions.addEventListener('change', function() {

    pedestriansFilter.checked         = false;
    cyclistsFilter.checked            = false;
    motorcyclesFilter.checked         = false;
    motoristsFilter.checked           = false;
    aggressiveDrivingFilter.checked   = false;
    alcoholFilter.checked             = false;
    speedingFilter.checked            = false;
    ranRedLightFilter.checked         = false;
    roadClosuresConstruction.checked  = false;
    majorCulturalEvent.checked        = false;
    filters()
  })
  
  pedestriansFilter.addEventListener('change', function() {
    allcollisions.checked = false,
    filters()
  })

  cyclistsFilter.addEventListener('change', function() {
    allcollisions.checked = false,
    filters()
  })

  motorcyclesFilter.addEventListener('change', function() {
    allcollisions.checked = false,
    filters()
  })

  motoristsFilter.addEventListener('change', function() {
    allcollisions.checked = false,
    filters()
  })



  allfactors.addEventListener('change', function() {

    aggressiveDrivingFilter.checked   = false;
    alcoholFilter.checked             = false;
    speedingFilter.checked            = false;
    ranRedLightFilter.checked         = false;
    roadClosuresConstruction.checked  = false;
    majorCulturalEvent.checked        = false;

    filters()

  })

  aggressiveDrivingFilter.addEventListener('change', function() {
    allfactors.checked = false,
    filters()
  })

  alcoholFilter.addEventListener('change', function() {
    allfactors.checked = false,
    filters()
  })

  speedingFilter.addEventListener('change', function() {
    allfactors.checked = false,
    filters()
  })

  roadClosuresConstruction.addEventListener('change', function() {
    allfactors.checked = false,
    filters()
  })

function filters () {



}
























  
  // reset filter
  resetFilter.addEventListener('click', function() {
    console.log('filter reset')
    pedestriansFilter.checked   = false;
    cyclistsFilter.checked      = false;
    motorcyclesFilter.checked   = false;
    motoristsFilter.checked     = false;
    aggressiveDrivingFilter.checked  = false;
    alcoholFilter.checked       = false;
    speedingFilter.checked      = false;
    ranRedLightFilter.checked   = false;
    roadClosuresConstruction.checked  = false;
    majorCulturalEvent.checked  = false;
    reset(data)
    initMap();
  })
})


function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 43.713783, lng: -79.385296},
          styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ebedeb"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.station","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3dbdb"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
        });

        addMarker(filterlist)
        
 


  //       // Add a marker clusterer to manage the markers.
  // var markerCluster = new MarkerClusterer(map, markers,
  //           {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    var bikeLayer = new google.maps.BicyclingLayer();

    var bikeRoute = document.getElementById('bike_route');
    var bikeDisplayed = false


    markers.forEach(function(marker) {

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">'+ 'Collision Details'+'</h4>'+
      '<div class="bodyContent">'+
      '<p>'+ 'Type: ' + marker.type  + '</p>'+
      '<p>'+ 'Details: ' + marker.details  + '</p>'+
      '<p>'+ 'Age Range: ' + marker.age  + '</p>'+
      '<p>'+ 'Date, Time: ' + marker.dateTime  + '</p>'+
      '<p>'+ 'Factors: ' + ''  + '</p>'+
      '<p>'+ 'Neigbourhood: ' + marker.neighbourhood  + '</p>'+
      '<p>'+ 'Ward: ' + marker.ward  + '</p>'+
      '<p></p>'+
      '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

    })

  bikeRoute.addEventListener('click', function(e) {
        e.preventDefault()
        if (bikeDisplayed === false ) {
            bikeLayer.setMap(map);
            bikeDisplayed = true
        }else {
            bikeLayer.setMap(null);
            bikeDisplayed = false
        }
    })
  }


  function addMarker(location) {

    var image = 'assets/Automobile-Orange-Circle.svg'
    var markers = locations.map(function(location, i) {
      return new google.maps.Marker({
        position: { lat: location.attributes.LATITUDE, lng: location.attributes.LONGITUDE },   map: map,
          type: location.attributes.IMPACTYPE,             details: location.attributes.ACCLASS,             age: location.attributes.INVAGE,          dateTime: location.attributes.DATE,             factors: {speed: location.attributes.SPEEDING, Age: location.attributes.AG_DRIV, redLight: location.attributes.REDLIGHT, alcohol: location.attributes.ALCOHOL},             neighbourhood: location.attributes.Hood_Name,             ward: location.attributes.Ward_Name,
        icon: image
      });
      markers.push(marker);
    });
  }

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
  }

  // Shows any markers currently in the array.
  function showMarkers() {
    setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    clearMarkers();
    markers = [];
  }

























// reset data

function reset(data) {
  locations = data.features
}

// tabs

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";


}

// info button

var info                    = document.querySelectorAll('.info')
var collisionsInfo          = document.querySelector('.collisions-info')
var contributingFactorsInfo = document.querySelector('.contributing-factors-info')

info[0].addEventListener('click', function(e) {
  e.preventDefault()
  console.log('info button 1 clicked')
  if (collisionsInfo.style.display == 'block') {
    collisionsInfo.style.display = 'none'
  } else {
    collisionsInfo.style.display = 'block'
  }
})

info[1].addEventListener('click', function(e) {
  e.preventDefault()
  console.log('info button 2 clicked')
  if (contributingFactorsInfo.style.display === 'block') {
    contributingFactorsInfo.style.display = 'none'
  } else {
    contributingFactorsInfo.style.display = 'block'
  }
})
