var response = $.ajax({
  url: 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {

  reset(data);
  initMap();

  //----------------------------- filters ----------------------------- //
  var pedestriansFilter = document.querySelector("input[value='pedestrians']");
  var cyclistsFilter    = document.querySelector("input[value='cyclists']");
  var injuriesFilter    = document.querySelector("input[value='injuries']");
  var fatalitiesFilter  = document.querySelector("input[value='fatalities']");
  var resetFilter        = document.getElementById('reset_filters');

  // pedestrians
  pedestriansFilter.addEventListener('change', function() {
    if(this.checked) {
      console.log('pedestrians filter clicked')
    } else {
      console.log('pedestrians filter not clicked')
    }
  })
  // cyclists
  cyclistsFilter.addEventListener('change', function() {
    if(this.checked) {
      console.log('cyclists filter clicked')
    } else {
      console.log('cyclists filter not clicked')
    }
  })
  // injuries
  injuriesFilter.addEventListener('change', function() {
    if(this.checked) {
      console.log('injuries filter clicked')
    } else {
      console.log('injuries filter not clicked')
    }
  })
  // fatalities
  fatalitiesFilter.addEventListener('change', function() {
    if(this.checked) {
      console.log('fatalities filter clicked')
    } else {
      console.log('fatalities filter not clicked')
    }
  })
  // reset filter
  resetFilter.addEventListener('click', function() {
    console.log('filter reset')
  })

})


function initMap() {

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
            position: { lat: location.attributes.LATITUDE, lng: location.attributes.LONGITUDE }
          });
        });


        // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }

// ======================== Filter Functions ==========================

// pedestrians

function pedestrian(data) {
  location = data.features.map(function(feature) {
    if (feature.attributes.PEDESTRIAN === 'Yes') {
      return feature
    }
  })
}

// cyclist

function cyclists(data) {
  location = data.features.map(function(feature) {
    if (feature.attributes.CYCLIST === 'Yes') {
      return feature
    }
  })
}

// injuries

function injuries(data) {
  location = data.features.map(function(feature) {
    if (feature.attributes.INJURY === 'Yes') {
      return feature
    }
  })
}

// fatalities

function fatalities(data) {
  location = data.features.map(function(feature) {
    if (feature.attributes.FATAL_NO > 0) {
      return feature
    }
  })
}

function reset(data) {
  locations = data.features
}
