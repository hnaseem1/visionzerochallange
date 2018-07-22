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
  var resetFilter       = document.getElementById('reset_filters');


  // pedestrians
  pedestriansFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && cyclistsFilter.checked !== true && injuriesFilter.checked !== true && fatalitiesFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && injuriesFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('All filters clicked')
      locations = []
      pedestrians(data)
      cyclists(data)
      injuries(data)
      fatalities(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && injuriesFilter.checked === true) {
      console.log('Three filters clicked')
      pedestrians(data)
      cyclists(data)
      injuries(data)
      initMap();
    } else if (this.checked && injuriesFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('Three filters clicked')
      pedestrians(data)
      injuries(data)
      fatalities(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('Three filters clicked')
      pedestrians(data)
      cyclists(data)
      fatalities(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true) {
      console.log('pedestrians and cyclists filters clicked')
      pedestrians(data)
      cyclists(data)
      initMap();
    } else if (this.checked && injuriesFilter.checked === true) {
      pedestrians(data)
      injuries(data)
      initMap();
    } else if(this.checked && fatalitiesFilter.checked === true) {
      pedestrians(data)
      fatalities()
      initMap();
    } else if (this.checked) {
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
    } else if (this.checked && pedestriansFilter.checked === true && injuriesFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('All filters clicked')
      pedestrians(data)
      cyclists(data)
      injuries(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && injuriesFilter.checked === true) {
      console.log('Three filters clicked')
      cyclists(data)
      pedestrians(data)
      injuries(data)
      initMap();
    } else if (this.checked && injuriesFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('Three filters clicked')
      cyclists(data)
      injuries(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('Three filters clicked')
      cyclists(data)
      pedestrians(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true) {
      cyclists(data)
      pedestrians(data)
      initMap();
    } else if (this.cheched && injuriesFilter.checked === true) {
      cyclists(data)
      injuries(data)
      initMap();
    } else if (this.checked && fatalitiesFilter.checked === true) {
      cyclists(data)
      fatalities(data)
      initMap();
    } else if (this.checked) {
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
    } else if (this.checked && pedestriansFilter.checked === true && injuriesFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('All filters clicked')
      pedestrians(data)
      cyclists(data)
      injuries(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && cyclistsFilter.checked === true) {
      console.log('Three filters clicked')
      injuries(data)
      pedestrians(data)
      cyclists(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('Three filters clicked')
      injuries(data)
      pedestrians(data)
      fatalities(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('Three filters clicked')
      injuries(data)
      cyclists(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true) {
      injuries(data)
      pedestrians(data)
      initMap();
    } else if (this.cheched && cyclistsFilter.checked === true) {
      injuries(data)
      cyclists(data)
      initMap();
    } else if (this.checked && fatalitiesFilter.checked === true) {
      injuries(data)
      fatalities(data)
      initMap();
    } else if (this.checked) {
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
    } else if (this.checked && pedestriansFilter.checked === true && injuriesFilter.checked === true && fatalitiesFilter.checked === true) {
      console.log('All filters clicked')
      pedestrians(data)
      cyclists(data)
      injuries(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && cyclistsFilter.checked === true) {
      console.log('All filters clicked')
      fatalities(data)
      pedestrians(data)
      cyclists(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && injuriesFilter.checked === true) {
      console.log('All filters clicked')
      fatalities(data)
      pedestrians(data)
      injuries(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && injuriesFilter.checked === true) {
      console.log('All filters clicked')
      fatalities(data)
      cyclists(data)
      injuries(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true) {
      fatalities(data)
      pedestrians(data)
      initMap();
    } else if (this.cheched && cyclistsFilter.checked === true) {
      fatalities(data)
      cyclists(data)
      initMap();
    } else if (this.checked && injuriesFilter.checked === true) {
      fatalities(data)
      injuries(data)
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

    var bikeLayer = new google.maps.BicyclingLayer();

    var bikeRoute = document.getElementById('bike_route');
    var bikeDisplayed = false

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

function pedestrians(data) {
  data.features.map(function(feature) {
    if (feature.attributes.PEDESTRIAN === 'Yes') {
      locations.push(feature)
    }
  })
}

// cyclists

function cyclists(data) {
  data.features.map(function(feature) {
    if (feature.attributes.CYCLIST === 'Yes') {
      locations.push(feature)
    }
  })
}

// injuries

function injuries(data) {
  data.features.map(function(feature) {
    if (feature.attributes.INJURY !== ' ') {
      locations.push(feature)
    }
  })
}

// fatalities

function fatalities(data) {
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
