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
  var motorcyclesFilter       = document.querySelector("input[value='motorcycles']");
  var motoristsFilter         = document.querySelector("input[value='motorists']");

  var aggressiveDrivingFilter = document.querySelector("input[value='aggresive-driving']");
  var alcoholFilter           = document.querySelector("input[value='alcohol']");
  var speedingFilter          = document.querySelector("input[value='speeding']");
  var ranRedLightFilter       = document.querySelector("input[value='ran-red-light']");

  var roadClosuresConstruction = document.querySelector("input[value='road-closures-construction']");
  var majorCulturalEvent      = document.querySelector("input[value='major-cultural-event']");

  var resetFilter             = document.getElementById('reset_filters');

  var map
  var markers = []

  // pedestrians
  pedestriansFilter.addEventListener('change', function() {
    if (!this.checked && cyclistsFilter.checked !== true && motorcyclesFilter.checked !== true && motoristsFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motorcyclesFilter.checked === true) {
        motorcycles(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
      pedestrians(data)
    } else if (this.checked !== true) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (motorcyclesFilter.checked === true) {
        motorcycles(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
    }
    initMap();
  })
  // cyclists
  cyclistsFilter.addEventListener('change', function() {
    if (!this.checked && cyclistsFilter.checked !== true && motorcyclesFilter.checked !== true && motoristsFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (motorcyclesFilter.checked === true) {
        motorcycles(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
      motorists(data)
    } else if (this.checked !== true) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (motorcyclesFilter.checked === true) {
        motorcycles(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
    }
    initMap();
  })
  // motorcycles
  motorcyclesFilter.addEventListener('change', function() {
    if (!this.checked && cyclistsFilter.checked !== true && motorcyclesFilter.checked !== true && motoristsFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motoristsFilter.checked == true) {
        motorists(data)
      }
      motorcycles(data)
    } else if (this.checked !== true) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motorcyclesFilter.checked == true) {
        pedestrians(data)
      }
    }
    initMap();
  })
  // motorists
  motoristsFilter.addEventListener('change', function() {
    if (!this.checked && cyclistsFilter.checked !== true && motorcyclesFilter.checked !== true && motoristsFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motorcyclesFilter.checked == true) {
        pedestrians(data)
      }
      motorists(data)
    } else if (this.checked !== true) {
      locations = []
      if (pedestriansFilter.checked === true) {
        pedestrians(data)
      }
      if (cyclistsFilter.checked === true) {
        cyclists(data)
      }
      if (motorcyclesFilter.checked == true) {
        pedestrians(data)
      }
    }
    initMap();
  })

  // aggressive driving
  aggressiveDrivingFilter.addEventListener('change', function() {
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
      aggressiveDriving(data);
    } else if (this.checked !== true) {
      locations = []
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
    }
    initMap();
  })
  // alcohol
  alcoholFilter.addEventListener('change', function() {
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        aggressiveDriving(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
      alcohol(data);
    } else if (this.checked !== true) {
      locations = []
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
    }
    initMap();
  })
  // speeding
  speedingFilter.addEventListener('change', function() {
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        alcohol(data)
      }
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
      speeding(data);
    } else if (this.checked !== true) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        alcohol(data)
      }
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (ranRedLightFilter.checked === true) {
        ranRedLight(data)
      }
    }
    initMap();
  })
  // ran red light
  ranRedLightFilter.addEventListener('change', function() {
    if (!this.checked && alcoholFilter.checked !== true && speedingFilter.checked !== true && ranRedLightFilter.checked !== true) {
      locations = []
      reset(data)
    } else if (this.checked) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        aggressiveDriving(data)
      }
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
      ranRedLight(data);
    } else if (this.checked !== true) {
      locations = []
      if (aggressiveDrivingFilter.checked === true) {
        aggressiveDriving(data)
      }
      if (alcoholFilter.checked === true) {
        alcohol(data)
      }
      if (speedingFilter.checked === true) {
        speeding(data)
      }
    }
    initMap();
  })

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
          styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ebedeb"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#d3dbdb"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [

      {
            "color": "#9e9e9e"
          }
        ]
      }
      ]
        });

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
  var image = 'assets/Automobile-Orange-Circle.svg'
  var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: { lat: location.attributes.LATITUDE, lng: location.attributes.LONGITUDE },             map: map,
             type: location.attributes.IMPACTYPE,             details: location.attributes.ACCLASS,             age: location.attributes.INVAGE,             dateTime: location.attributes.DATE,             factors: {speed: location.attributes.SPEEDING, Age: location.attributes.AG_DRIV, redLight: location.attributes.REDLIGHT, alcohol: location.attributes.ALCOHOL},             neighbourhood: location.attributes.Hood_Name,             ward: location.attributes.Ward_Name,
            icon: image

          });
        });


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
