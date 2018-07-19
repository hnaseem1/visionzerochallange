var response = $.ajax({
  url: 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {

  // console.log(data.features);
  // work in here
  console.log('start');

  var locations = data.features.map(function(feature) {
    var obj = {lat: feature.geometry.x, lng: feature.geometry.y}
    return obj
  })

  console.log(locations);

  initMap(locations);


  console.log('finished')

















  })


function initMap(locations) {

  var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: {lat: 43.0391667, lng: -79.525}
        });

        // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

  
        // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }
