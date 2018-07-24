var pedestriansFilter = document.querySelector("input[value='pedestrians']");
var cyclistsFilter    = document.querySelector("input[value='cyclists']");
var injuriesFilter    = document.querySelector("input[value='injuries']");
var fatalitiesFilter  = document.querySelector("input[value='fatalities']");
var resetFilter       = document.getElementById('reset_filters');


$.ajax({
  url: 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {

  reset(data);
  initMap();

  //----------------------------- filters ----------------------------- //
  // pedestrians
  pedestriansFilter.addEventListener('change', function() {

    pedestrian(data);
    initMap();

  })
  // cyclists
  cyclistsFilter.addEventListener('change', function() {

    cyclists(data);
    initMap();

  })
  // injuries
  injuriesFilter.addEventListener('change', function() {

    injuries(data);
    initMap();

  })
  // fatalities
  fatalitiesFilter.addEventListener('change', function() {

    fatalities(data);
    initMap();

  })
  // reset filter
  resetFilter.addEventListener('click', function() {

    reset(data)
    initMap();

  })
})


function initMap() {

<<<<<<< HEAD
    var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: {lat: 43.713783, lng: -79.385296}
            });

            // Add some markers to the map.
            // Note: The code uses the JavaScript Array.prototype.map() method to
            // create an array of markers based on a given "locations" array.
            // The map() method here has nothing to do with the Google Maps API.

    var infoWin = new google.maps.InfoWindow();

    var markers = locations.map(function(location, i) {
        var marker = new google.maps.Marker({
                position: { lat: location.attributes.LATITUDE, lng: location.attributes.LONGITUDE }
            });
            google.maps.event.addListener(marker, 'click', function(evt) {
                infoWin.setContent('testestestest');
                infoWin.open(map, marker);
            })
            return marker;
            });


            // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
=======
  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 43.713783, lng: -79.385296}
        });

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: { lat: location.attributes.LATITUDE, lng: location.attributes.LONGITUDE },
            map: map,
            type: location.attributes.IMPACTYPE,
            details: location.attributes.ACCLASS,
            age: location.attributes.INVAGE,
            dateTime: location.attributes.DATE,
            factors: {speed: location.attributes.SPEEDING, Age: location.attributes.AG_DRIV, redLight: location.attributes.REDLIGHT, alcohol: location.attributes.ALCOHOL},
            neighbourhood: location.attributes.Hood_Name,
            ward: location.attributes.Ward_Name

          });
        });


        // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
>>>>>>> 74b6dab054f7a1316a6703f886d3a943a66db581

    var bikeLayer = new google.maps.BicyclingLayer();

    var bikeRoute = document.getElementById('bike_route');
    var bikeDisplayed = false

    markers.forEach(function(marker) {

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">'+ 'Collision Details'+'</h4>'+
      '<div id="bodyContent">'+
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



// ======================== Filter Functions ==========================

// pedestrians


function pedestrian(data) {

  if(pedestriansFilter.checked && injuriesFilter.checked ) {

    injuries(data);

  } else if (pedestriansFilter.checked && fatalitiesFilter.checked) {

    fatalities(data);

  } else if (pedestriansFilter.checked) {

    locations = data.features.filter(function(feature) {
        return feature.attributes.PEDESTRIAN === 'Yes'
    })
  }

}

// cyclist

function cyclists(data) {

  if (cyclistsFilter.checked && injuriesFilter.checked ) {

    injuries(data);

  } else if (cyclistsFilter.checked && fatalitiesFilter.checked) {

    fatalities(data);

  } else if (cyclistsFilter.checked) {

    locations = data.features.filter(function(feature) {
        return feature.attributes.CYCLIST === 'Yes'
    })
  }
}

// injuries

function injuries(data) {

  if (pedestriansFilter.checked) {

    locations = data.features.filter(function(feature) {
        return feature.attributes.PEDESTRIAN === 'Yes' && feature.attributes.INJURY !== ' '
    })
  } else if (cyclistsFilter.checked) {

    locations = data.features.filter(function(feature) {
        return feature.attributes.CYCLIST === 'Yes' && feature.attributes.INJURY !== ' '
    })
  } else {
    locations = data.features.filter(function(feature) {
        return feature.attributes.INJURY !== ' '
    })
  }

}

// fatalities

function fatalities(data) {

  if (pedestriansFilter.checked) {

    locations = data.features.filter(function(feature) {
        return feature.attributes.PEDESTRIAN === 'Yes' && feature.attributes.FATAL_NO > 0
    })
  } else if (cyclistsFilter.checked) {

    locations = data.features.filter(function(feature) {
        return feature.attributes.CYCLIST === 'Yes' && feature.attributes.FATAL_NO > 0
    })
  } else {
    locations = data.features.filter(function(feature) {
        return feature.attributes.FATAL_NO > 0
    })
  }

}

function reset(data) {

  locations = data.features
  pedestriansFilter.checked = false;
  cyclistsFilter.checked    = false;
  injuriesFilter.checked    = false;
  fatalitiesFilter.checked  = false;

}
