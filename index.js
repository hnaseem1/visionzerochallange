var pedestriansFilter = document.querySelector("input[value='pedestrians']");
var cyclistsFilter    = document.querySelector("input[value='cyclists']");
var injuriesFilter    = document.querySelector("input[value='injuries']");
var fatalitiesFilter  = document.querySelector("input[value='fatalities']");
var resetFilter       = document.getElementById('reset_filters');
var map;
var markers = [];
var locations
$.ajax({
  url: 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {
  locations = data.features

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
    reset()

  })
})


function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 43.713783, lng: -79.385296}
        });

  var bikeLayer = new google.maps.BicyclingLayer();
  var bikeRoute = document.getElementById('bike_route');
  var bikeDisplayed = false

  bikeRoute.addEventListener('click', function(e) {
    e.preventDefault()
    setMapOnAll(null) 

    deleteMarkers()
    console.log('deletemarkers');
    
    if (bikeDisplayed === false ) {
        bikeLayer.setMap(map);
        bikeDisplayed = true
    }else {
        bikeLayer.setMap(null);
        bikeDisplayed = false
    }
  })
}

function addMarker(locations) {
  console.log('start addmarker');
  
  for (var i = 0; i < locations.length; i++) {
      
    var marker = new google.maps.Marker({
        position: { lat: locations[i].attributes.LATITUDE, lng: locations[i].attributes.LONGITUDE },
        map: map,
        type: locations[i].attributes.IMPACTYPE,
        details: locations[i].attributes.ACCLASS,
        age: locations[i].attributes.INVAGE,
        dateTime: locations[i].attributes.DATE,
        factors: {speed: locations[i].attributes.SPEEDING, Age: locations[i].attributes.AG_DRIV, redLight: locations[i].attributes.REDLIGHT, alcohol: locations[i].attributes.ALCOHOL},
        neighbourhood: locations[i].attributes.Hood_Name,
        ward: locations[i].attributes.Ward_Name
    });
    markers.push(marker);
  };
  console.log(markers);
  
}



  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
    }
  

  // Removes the markers from the map, but keeps them in the array.
  function clearMarkers() {
    setMapOnAll(null);
    // console.log(markers);
    // console.log(locations);
    
    
  }

  // Shows any markers currently in the array.
  function showMarkers() {
    
    setMapOnAll(map);
  }

  // Deletes all markers in the array by removing references to them.
  function deleteMarkers() {
    locations = []
    markers = [];
    clearMarkers();

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

function reset() {
console.log('reset');

//   pedestriansFilter.checked = false;
//   cyclistsFilter.checked    = false;
//   injuriesFilter.checked    = false;
//   fatalitiesFilter.checked  = false;
//   console.log(markers);
//  markers.setMap(null)
addMarker(locations)
showMarkers()

}
