
const HORIZON = 'horizon'
const VERTICAL = 'vertical'


mapboxgl.accessToken = 'pk.eyJ1IjoiemhlbmZ1IiwiYSI6ImNpb284bzNoYzAwM3h1Ym02aHlrand6OTAifQ.sKX-XKJMmgtk_oI5oIUV_g'
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [-74.50, 40],
  zoom: 9,
  preserveDrawingBuffer: true
})



$('#exportLink').click(function () {
  console.log(window.devicePixelRatio)

  Object.defineProperty(window, 'devicePixelRatio', {
    get: () => $('#dpi').val() / 96
  })
  var img = map.getCanvas().toDataURL('image/png')
  this.href = img
})

$('#mobilDirection').change(evt => {
  switchDirection()
})

$("#mobileModel").change((evt) => {
  const modelSize = evt.target.value
  if (modelSize.indexOf('*') <= 0) {
    resetMapStyle()
  } else {
    const [width, height] = modelSize.split('*').map(x => parseFloat(x))
    const direction = $("#mobilDirection").val()
    direction === HORIZON ? setMobileSize(width, height) : setMobileSize(height, width)
  }

})

function setMobileSize(width, height) {
  const mapObj = $("#map")[0]
  mapObj.style.width = `${mm2px(width)}px`
  mapObj.style.height = `${mm2px(height)}px`
}

function switchDirection() {
  const mapObjStyle = $("#map")[0].style
  const { width, height } = mapObjStyle
  mapObjStyle.width = height
  mapObjStyle.height = width
}

function resetMapStyle() {
  const mapObjStyle = $("#map")[0].style
  mapObjStyle.width = '100%'
  mapObjStyle.height = '100%'
}

function mm2px(mm) {
  const dpi = window.devicePixelRatio * 96
  return mm / 25.4 * dpi
}