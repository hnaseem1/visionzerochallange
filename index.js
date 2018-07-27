
var filterlist = []
var result = []
var markers = []
var masterlist = []

var response = $.ajax({
  url: 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {

  var masterlist = data.features

  initMap();
  addMarker(masterlist);

  //----------------------------- filters ----------------------------- //

  var bikeRoute = document.getElementById('bike_route');
  var bikeDisplayed = false

  var year                    = document.getElementById('selectYear')

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

  year.addEventListener('change', function() {
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

  ranRedLightFilter.addEventListener('change', function() {
    allfactors.checked = false,
    filters()
  })

  roadClosuresConstruction.addEventListener('change', function() {
    allfactors.checked = false,
    filters()
  })

  majorCulturalEvent.addEventListener('change', function() {
    allfactors.checked = false,
    filters()
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

  // reset filter
resetFilter.addEventListener('click', function() {
  allcollisions.checked       = false
  pedestriansFilter.checked   = false;
  cyclistsFilter.checked      = false;
  motorcyclesFilter.checked   = false;
  motoristsFilter.checked     = false;
  allfactors.checked          = false
  aggressiveDrivingFilter.checked  = false;
  alcoholFilter.checked       = false;
  speedingFilter.checked      = false;
  ranRedLightFilter.checked   = false;
  roadClosuresConstruction.checked  = false;
  majorCulturalEvent.checked  = false;
  year.selectedIndex = 0
  deleteMarkers()
  filters()
  })


  function filters () {

    deleteMarkers()
    filterlist = []
    result = []
    resultpostsecondfilter = []

    for (let i = 0; i < masterlist.length; i++) {
      filterlist.push(masterlist[i])
    }


    if (year.selectedIndex !== 0 ) {
      var parcialresult = []

      for (let i = 0; i < filterlist.length; i++) {
        if (year.value === filterlist[i].attributes.YEAR.toString()) {
          parcialresult.push(filterlist[i])
        }
      }
      if (parcialresult.length !== 0) {
        filterlist = []
        for (let i = 0; i < parcialresult.length; i++) {
          filterlist.push(parcialresult[i])
        }
      }
    }

    if (allcollisions.checked) {
      for (let i = 0; i < filterlist.length; i++) {
      if (filterlist[i].attributes.PEDESTRIAN === 'Yes' || filterlist[i].attributes.CYCLIST === 'Yes' || filterlist[i].attributes.MOTORCYCLE === 'Yes' || filterlist[i].attributes.AUTOMOBILE === 'Yes') {
        result.push(filterlist[i])
        filterlist.splice(i, 1)
      }
    }
  }

    if (pedestriansFilter.checked) {
      for (let i = 0; i < filterlist.length; i++) {
        if (filterlist[i].attributes.PEDESTRIAN === 'Yes') {
          result.push(filterlist[i])
          filterlist.splice(i, 1)
        }
      }
    }

    if (cyclistsFilter.checked) {
      for (let i = 0; i < filterlist.length; i++) {
        if (filterlist[i].attributes.CYCLIST === 'Yes') {
          result.push(filterlist[i])
          filterlist.splice(i, 1)
        }
      }
    }

    if (motorcyclesFilter.checked) {
      for (let i = 0; i < filterlist.length; i++) {
        if (filterlist[i].attributes.MOTORCYCLE !== ' ') {
          result.push(filterlist[i])
          filterlist.splice(i, 1)
        }
      }
    }

    if (motoristsFilter.checked) {
      for (let i = 0; i < filterlist.length; i++) {
        if (filterlist[i].attributes.AUTOMOBILE !== ' ') {
          result.push(filterlist[i])
          filterlist.splice(i, 1)
        }
      }
    }

    if (result.length === 0) {
      for (let i = 0; i < filterlist.length; i++) {
        result.push(filterlist[i])
      }
    }

    if (allfactors.checked) {
      for (let i = 0; i < result.length; i++) {
        if (result[i].attributes.AG_DRIV !== ' '){
          resultpostsecondfilter.push(result[i])
          result.splice(i, 1)

        } else if (result[i].attributes.ALCOHOL !== ' ') {
          resultpostsecondfilter.push(result[i])
          result.splice(i, 1)
          console.log('1');

        } else if (result[i].attributes.SPEEDING !== ' ') {
          resultpostsecondfilter.push(result[i])
          result.splice(i, 1)
        }else if (result[i].attributes.REDLIGHT !== ' ') {
          resultpostsecondfilter.push(result[i])
          result.splice(i, 1)
        }
      }
    }

    if (aggressiveDrivingFilter.checked) {
      for (let i = 0; i < result.length; i++) {
        if (result[i].attributes.AG_DRIV !== ' ') {
          resultpostsecondfilter.push(result[i])
          result.splice(i, 1)
        }
      }
    }

    if (alcoholFilter.checked) {
      for (let i = 0; i < result.length; i++) {
        if (result[i].attributes.ALCOHOL !== ' ') {
          resultpostsecondfilter.push(result[i])
          result.splice(i, 1)
        }
      }
    }

    if (speedingFilter.checked) {
      for (let i = 0; i < result.length; i++) {
        if (result[i].attributes.SPEEDING !== ' ') {
          resultpostsecondfilter.push(result[i])
          result.splice(i, 1)
        }
      }
    }

    if (ranRedLightFilter.checked) {
      for (let i = 0; i < result.length; i++) {
        if (result[i].attributes.REDLIGHT !== ' ') {
          resultpostsecondfilter.push(result[i])
          result.splice(i, 1)
        }
      }
    }

    if ( result.length === 0 ) {
      for (let i = 0; i < filterlist.length; i++) {
        result.push(filterlist[i])
      }
    }

    if (resultpostsecondfilter.length !== 0){
      addMarker(resultpostsecondfilter)
      console.log(resultpostsecondfilter.length);
    } else {
      addMarker(result)
      console.log(result.length);
    }
  }



  function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 43.713783, lng: -79.385296},
      styles: [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ebedeb"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.station","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3dbdb"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]
    });

    bikeLayer = new google.maps.BicyclingLayer();

  }


  function addMarker(location) {

    markers = []
    var images = ['assets/Automobile-Orange-Circle.svg','assets/Motorcycle-Purple-Circle.svg', 'assets/Bicycle-Cyan-Circle.svg', 'assets/Pedestrians-Magenta-Circle.svg']


    for (var i = 0; i < location.length; i++) {

      var marker = new google.maps.Marker({
        position: { lat: location[i].attributes.LATITUDE,
          lng: location[i].attributes.LONGITUDE },
          type: location[i].attributes.IMPACTYPE,
          details: location[i].attributes.ACCLASS,
          age: location[i].attributes.INVAGE,
          dateTime: location[i].attributes.DATE,
          factors: {speed: location[i].attributes.SPEEDING, Age: location[i].attributes.AG_DRIV, redLight: location[i].attributes.REDLIGHT, alcohol: location[i].attributes.ALCOHOL},
          neighbourhood: location[i].attributes.Hood_Name,
          ward: location[i].attributes.Ward_Name,
          icon: images[0],
      });



      if (location[i].attributes.PEDESTRIAN !== ' ') {

        marker.icon = images[3]

      } else if (location[i].attributes.CYCLIST !== ' ') {

        marker.icon = images[2]

      } else if (location[i].attributes.MOTORCYCLE !== ' ') {

        marker.icon = images[1]

      } else if (location[i].attributes.AUTOMOBILE !== ' ') {

        marker.icon = images[0]

      }

      markers.push(marker);
    };
    setMapOnAll(map)
  }

  // Sets the map on all markers in the array.
  function setMapOnAll(map) {

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
        marker.setMap(map);
    })


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
  var topPosition = (e.clientY - 110) + 'px'
  console.log(topPosition)
  var leftPosition = (e.clientX + 60) + 'px'
  collisionsInfo.style.top = topPosition;
  collisionsInfo.style.left = leftPosition;
  if (collisionsInfo.style.display == 'block') {
    collisionsInfo.style.display = 'none'
  } else {
    collisionsInfo.style.display = 'block'
  }
})

info[1].addEventListener('click', function(e) {
  e.preventDefault()
  console.log('info button 2 clicked')
  var topPosition = (e.clientY - 80) + 'px'
  console.log(topPosition)
  var leftPosition = (e.clientX + 60) + 'px'
  contributingFactorsInfo.style.top = topPosition;
  contributingFactorsInfo.style.left = leftPosition;
  if (contributingFactorsInfo.style.display === 'block') {
    contributingFactorsInfo.style.display = 'none'
  } else {
    contributingFactorsInfo.style.display = 'block'
  }
})
})
