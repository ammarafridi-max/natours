const locations = JSON.parse(document.getElementById('map').dataset.locations);
mapboxgl.accessToken = 'pk.eyJ1IjoiYW1tYXItYWZyaWRpOTUiLCJhIjoiY2x1bHIyMXQyMHlsczJpbGlucnZ3aDZuMyJ9.TlxnYvgM567rIC2YP3kjSA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});