export const mapToken = 'pk.eyJ1IjoibGl6c2hpZyIsImEiOiJjajI2aWRwbHcwMGdwMnFvNWdyZzZkMnoxIn0.ijXLCu9J588oipJzYGOppg'
export const mapStyle = 'mapbox://styles/lizshig/cj29cralq000p2rpk8txr8ay5'

export const navButtonOptions = [{
  id: 'homeNavButton',
  className: 'mapNavigation',
  hasPopup: true,
  label: '916 born-n-raised'
}, {
  id: 'almaMaterNavButton',
  className: 'mapNavigation',
  hasPopup: true,
  label: 'earned a BS degree'
}, {
  id: 'pastExpNavButton',
  className: 'mapNavigation',
  hasPopup: true,
  label: 'developed web apps'
}, {
  id: 'travelNavButton',
  className: 'mapNavigation',
  hasPopup: false,
  label: 'explored cultures'
}, {
  id: 'newAdventureNavButton',
  className: 'mapNavigation',
  hasPopup: true,
  label: 'ready for more!'
}]

// these markers have their own popup
export const lifePopupMarkers = [{
  id: 'homeNavButton',
  location: [-121.493225, 38.576514],
  anchorPosition: 'top',
  text: '#SacramentoProud'
}, {
  id: 'almaMaterNavButton',
  location: [-121.754749, 38.536998],
  anchorPosition: 'top',
  text: 'UC Davis: Department of Computer Science'
}, {
  id: 'pastExpNavButton',
  location: [-121.750728, 38.536076],
  anchorPosition: 'top',
  text: 'UC Davis: Energy Conservation Office'
}, {
  id: 'newAdventureNavButton',
  location: [-122.399834, 37.788420],
  anchorPosition: 'bottom',
  text: 'Hello, World!'
}]

// these markers are united with no popups
export const travelMarkersUnionLocation = [112.417591, 13.529823]
export const travelMarkersUnion = [
  [-3.568016, 40.483561],
  [-119.769251, 39.172964],
  [-119.976369, 38.944978],
  [-119.768318, 39.498696],
  [2.548053, 49.010078],
  [25.347933, 37.435035],
  [23.945974, 37.936262],
  [12.339560, 45.505033],
  [12.246410, 41.798999],
  [-77.041433, 38.847974],
  [-73.773327, 40.643029],
  [-73.290942, 42.555801],
  [-8.035881, 31.609807],
  [-77.027418, 38.996319],
  [-77.036426, 38.898603],
  [-115.153213, 36.084264],
  [105.799122, 21.220325],
  [121.234358, 25.078978],
  [103.985321, 1.349743],
  [98.307720, 8.110978],
  [98.964144, 18.770007],
  [115.167007, -8.748375],
  [100.750048, 13.688998],
  [-157.924462, 21.324333],
  [-122.596081, 45.590242],
  [-122.308688, 47.449945]
]
