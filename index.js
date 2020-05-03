
Object.defineProperty(window, 'devicePixelRatio', {
  get: function () { return 300 / 96 }
});

mapboxgl.accessToken = 'pk.eyJ1IjoiemhlbmZ1IiwiYSI6ImNpb284bzNoYzAwM3h1Ym02aHlrand6OTAifQ.sKX-XKJMmgtk_oI5oIUV_g';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [-74.50, 40],
  zoom: 9,
  preserveDrawingBuffer: true
});

$('#downloadLink').click(function () {
  var img = map.getCanvas().toDataURL('image/png')
  this.href = img
})