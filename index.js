$.ajax({
  url: 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {

  reset(data);
  initMap();




  // pedestrians
  pedestriansFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && cyclistsFilter.checked !== true && injuriesFilter.checked !== true && fatalitiesFilter.checked !== true) {
      reset(data)
      initMap();
    }
    if (this.checked) {
      pedestrians(data)
      initMap();
    }
  })
  // cyclists
  cyclistsFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && cyclistsFilter.checked !== true && injuriesFilter.checked !== true && fatalitiesFilter.checked !== true) {
      reset(data)
      initMap();
    }
    if (this.checked) {
      cyclists(data);
      initMap();
    }
  })
  // injuries
  injuriesFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && cyclistsFilter.checked !== true && injuriesFilter.checked !== true && fatalitiesFilter.checked !== true) {
      reset(data)
      initMap();
    }
    if (this.checked) {
      injuries(data);
      initMap();
    }
  })
  // fatalities
  fatalitiesFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && cyclistsFilter.checked !== true && injuriesFilter.checked !== true && fatalitiesFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked) {
      fatalities(data);
      initMap();
    }
  })
  // reset filter
  resetFilter.addEventListener('click', function() {
    console.log('filter reset')
    pedestriansFilter.checked = false;
    cyclistsFilter.checked    = false;
    injuriesFilter.checked    = false;
    fatalitiesFilter.checked  = false;
    reset(data)
    initMap();
  })

<<<<<<< HEAD
=======


>>>>>>> 74b6dab054f7a1316a6703f886d3a943a66db581
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
            position: { lat: location.attributes.LATITUDE, lng: location.attributes.LONGITUDE },
            map: map,
            title: location.attributes.IMPACTYPE + ' at ' + location.attributes.Hood_Name
          });
        });


        // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    var bikeLayer = new google.maps.BicyclingLayer();

    var bikeRoute = document.getElementById('bike_route');
    var bikeDisplayed = false

    markers.forEach(function(marker) {

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h3 id="firstHeading" class="firstHeading">'+ marker.title +'</h3>'+
      '<div id="bodyContent">'+
      '<p></p>'+
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


//----------------------------- filters ----------------------------- //
var pedestriansFilter = document.querySelector("input[value='pedestrians']");
var cyclistsFilter    = document.querySelector("input[value='cyclists']");
var injuriesFilter    = document.querySelector("input[value='injuries']");
var fatalitiesFilter  = document.querySelector("input[value='fatalities']");
var resetFilter       = document.getElementById('reset_filters');


// ======================== Filter Functions ==========================

// pedestrians

<<<<<<< HEAD
function pedestrians(data) {
  if (cyclistsFilter.checked === true) {
    cyclists(data)
  }

  if (injuriesFilter.checked === true) {
    injuries(data)
  }

  if (fatalitiesFilter.checked === true) {
    fatalities(data)
  }

  data.features.map(function(feature) {
    if (feature.attributes.PEDESTRIAN === 'Yes') {
      locations.push(feature)
    }
=======

function pedestrian(data) {
  locations = data.features.filter(function(feature) {
      return feature.attributes.PEDESTRIAN === 'Yes'
>>>>>>> 74b6dab054f7a1316a6703f886d3a943a66db581
  })
}

// cyclists

function cyclists(data) {
  if (pedestriansFilter.checked === true) {
    pedestrians(data)
  }

  if (injuriesFilter.checked === true) {
    injuries(data)
  }

  if (fatalitiesFilter.checked === true) {
    fatalities(data)
  }

  data.features.map(function(feature) {
    if (feature.attributes.CYCLIST === 'Yes') {
      locations.push(feature)
    }
  })
}

// injuries

function injuries(data) {
  if (pedestriansFilter.checked === true) {
    pedestrians(data)
  }

  if (cyclistsFilter.checked === true) {
    cyclists(data)
  }

  if (fatalitiesFilter.checked === true) {
    fatalities(data)
  }

  data.features.map(function(feature) {
    if (feature.attributes.INJURY !== ' ') {
      locations.push(feature)
    }
  })
}

// fatalities

function fatalities(data) {
  if (pedestriansFilter.checked === true) {
    pedestrians(data)
  }

  if (cyclistsFilter.checked === true) {
    cyclists(data)
  }

  if (injuriesFilter.checked === true) {
    injuries(data)
  }

  data.features.map(function(feature) {
    if (feature.attributes.FATAL_NO > 0) {
      locations.push(feature)
    }
  })
}

// reset data

function reset(data) {
  locations = data.features
}
