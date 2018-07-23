var response = $.ajax({
  url: 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {

  reset(data);
  initMap();

  //----------------------------- filters ----------------------------- //
  var pedestriansFilter       = document.querySelector("input[value='pedestrians']");
  var cyclistsFilter          = document.querySelector("input[value='cyclists']");
  var motorcylesFilter        = document.querySelector("input[value='motorcyles']");
  var motoristsFilter         = document.querySelector("input[value='motorists']");

  var agressiveDrivingFilter  = document.querySelector("input[value='aggresive-driving']");
  var alcoholFilter           = document.querySelector("input[value='alcohol']");
  var speedingFilter          = document.querySelector("input[value='speeding']");
  var ranRedLightFilter       = document.querySelector("input[value='ran-red-light']");

  var resetFilter             = document.getElementById('reset_filters');


  // pedestrians
  pedestriansFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && cyclistsFilter.checked !== true && motorcylesFilter.checked !== true && motoristsFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && motorcylesFilter.checked === true && motoristsFilter.checked === true) {
      console.log('All filters clicked')
      locations = []
      pedestrians(data)
      cyclists(data)
      motorcycles(data)
      fatalities(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && motorcylesFilter.checked === true) {
      console.log('Three filters clicked')
      pedestrians(data)
      cyclists(data)
      motorcycles(data)
      initMap();
    } else if (this.checked && motorcylesFilter.checked === true && motoristsFilter.checked === true) {
      console.log('Three filters clicked')
      pedestrians(data)
      motorcycles(data)
      fatalities(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && motoristsFilter.checked === true) {
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
    } else if (this.checked && motorcylesFilter.checked === true) {
      pedestrians(data)
      motorcycles(data)
      initMap();
    } else if(this.checked && motoristsFilter.checked === true) {
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
    if (!this.checked && cyclistsFilter.checked !== true && motorcylesFilter.checked !== true && motoristsFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && motorcylesFilter.checked === true && motoristsFilter.checked === true) {
      console.log('All filters clicked')
      pedestrians(data)
      cyclists(data)
      motorcycles(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && motorcylesFilter.checked === true) {
      console.log('Three filters clicked')
      cyclists(data)
      pedestrians(data)
      motorcycles(data)
      initMap();
    } else if (this.checked && motorcylesFilter.checked === true && motoristsFilter.checked === true) {
      console.log('Three filters clicked')
      cyclists(data)
      motorcycles(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && motoristsFilter.checked === true) {
      console.log('Three filters clicked')
      cyclists(data)
      pedestrians(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true) {
      cyclists(data)
      pedestrians(data)
      initMap();
    } else if (this.cheched && motorcylesFilter.checked === true) {
      cyclists(data)
      motorcycles(data)
      initMap();
    } else if (this.checked && motoristsFilter.checked === true) {
      cyclists(data)
      fatalities(data)
      initMap();
    } else if (this.checked) {
      cyclists(data);
      initMap();
    }
  })
  // motorcycles
  motorcylesFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && cyclistsFilter.checked !== true && motorcylesFilter.checked !== true && motoristsFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && motorcylesFilter.checked === true && motoristsFilter.checked === true) {
      console.log('All filters clicked')
      pedestrians(data)
      cyclists(data)
      motorcycles(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && cyclistsFilter.checked === true) {
      console.log('Three filters clicked')
      motorcycles(data)
      pedestrians(data)
      cyclists(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && motoristsFilter.checked === true) {
      console.log('Three filters clicked')
      motorcycles(data)
      pedestrians(data)
      fatalities(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && motoristsFilter.checked === true) {
      console.log('Three filters clicked')
      motorcycles(data)
      cyclists(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true) {
      motorcycles(data)
      pedestrians(data)
      initMap();
    } else if (this.cheched && cyclistsFilter.checked === true) {
      motorcycles(data)
      cyclists(data)
      initMap();
    } else if (this.checked && motoristsFilter.checked === true) {
      motorcycles(data)
      fatalities(data)
      initMap();
    } else if (this.checked) {
      motorcycles(data);
      initMap();
    }
  })
  // motorists
  motoristsFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && cyclistsFilter.checked !== true && motorcylesFilter.checked !== true && motoristsFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && motorcylesFilter.checked === true && motoristsFilter.checked === true) {
      console.log('All filters clicked')
      pedestrians(data)
      cyclists(data)
      motorcycles(data)
      fatalities(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && cyclistsFilter.checked === true) {
      console.log('All filters clicked')
      fatalities(data)
      pedestrians(data)
      cyclists(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true && motorcylesFilter.checked === true) {
      console.log('All filters clicked')
      fatalities(data)
      pedestrians(data)
      motorcycles(data)
      initMap();
    } else if (this.checked && cyclistsFilter.checked === true && motorcylesFilter.checked === true) {
      console.log('All filters clicked')
      fatalities(data)
      cyclists(data)
      motorcycles(data)
      initMap();
    } else if (this.checked && pedestriansFilter.checked === true) {
      fatalities(data)
      pedestrians(data)
      initMap();
    } else if (this.cheched && cyclistsFilter.checked === true) {
      fatalities(data)
      cyclists(data)
      initMap();
    } else if (this.checked && motorcylesFilter.checked === true) {
      fatalities(data)
      motorcycles(data)
      initMap();
    } else if (this.checked) {
      fatalities(data);
      initMap();
    }
  })

  // aggressive driving
  agressiveDrivingFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked) {
      aggressiveDriving(data);
      initMap();
    }
  })
  // alcohol
  alcoholFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked) {
      alcohol(data);
      initMap();
    }
  })
  // speeding
  speedingFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked) {
      speeding(data);
      initMap();
    }
  })
  // ran red light
  ranRedLightFilter.addEventListener('change', function() {
    locations = []
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      reset(data)
      initMap();
    } else if (this.checked) {
      ranRedLight(data);
      initMap();
    }
  })

  // reset filter
  resetFilter.addEventListener('click', function() {
    console.log('filter reset')
    pedestriansFilter.checked = false;
    cyclistsFilter.checked    = false;
    motorcylesFilter.checked    = false;
    motoristsFilter.checked  = false;
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

function motorcycles(data) {
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

// motorcycles

function motorcycles(data) {
  data.features.map(function(feature) {
    if (feature.attributes.MOTORCYCLE !== ' ') {
      locations.push(feature)
    }
  })
}

// motorists

function motorists(data) {
  data.features.map(function(feature) {
    if (feature.attributes.AUTOMOBILE !== ' ') {
      locations.push(feature)
    }
  })
}

// aggressive driving

function aggressiveDriving(data) {
  data.features.map(function(feature) {
    if (feature.attributes.AG_DRIV !== ' ') {
      locations.push(feature)
    }
  })
}

// alcohol

function alcohol(data) {
  data.features.map(function(feature) {
    if (feature.attributes.ALCOHOL !== ' ') {
      locations.push(feature)
    }
  })
}

// speeding

function speeding(data) {
  data.features.map(function(feature) {
    if (feature.attributes.SPEEDING !== ' ') {
      locations.push(feature)
    }
  })
}

// ran red light

function ranRedLight(data) {
  data.features.map(function(feature) {
    if (feature.attributes.REDLIGHT !== ' ') {
      locations.push(feature)
    }
  })
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
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
