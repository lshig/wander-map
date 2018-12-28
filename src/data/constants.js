export const mapToken =
  'pk.eyJ1IjoibGl6c2hpZyIsImEiOiJjajI2aWRwbHcwMGdwMnFvNWdyZzZkMnoxIn0.ijXLCu9J588oipJzYGOppg';
export const mapStyle = 'mapbox://styles/lizshig/cjptz4nvn6mnz2srtah5ssneu';

export const navigationButtons = [
  {
    id: 'homeNavigationButton',
    hasPopup: true,
    label: '916 born-n-raised'
  },
  {
    id: 'almaMaterNavigationButton',
    hasPopup: true,
    label: 'earned a BS degree'
  },
  {
    id: 'pastExpNavigationButton',
    hasPopup: true,
    label: 'built web apps'
  },
  {
    id: 'travelNavigationButton',
    hasPopup: false,
    label: 'explored cultures'
  },
  {
    id: 'currentExpNavigationButton',
    hasPopup: true,
    label: 'builds apps and APIs'
  }
];

// These markers have their own popup
export const popupMarkers = [
  {
    id: 'homeNavigationButton',
    location: [-121.493225, 38.576514],
    anchorPosition: 'top',
    text: '#SacramentoProud'
  },
  {
    id: 'almaMaterNavigationButton',
    location: [-121.754749, 38.536998],
    anchorPosition: 'top',
    text: 'UC Davis: Department of Computer Science'
  },
  {
    id: 'pastExpNavigationButton',
    location: [-121.750728, 38.536076],
    anchorPosition: 'top',
    text: 'UC Davis: Energy Conservation Office'
  },
  {
    id: 'currentExpNavigationButton',
    location: [-122.396286, 37.791293],
    anchorPosition: 'bottom',
    text: 'Mapbox'
  }
];

// These markers are united with no popups
export const markersUnionBaseLocation = [112.417591, 13.529823];
export const markersUnion = [
  [-3.568016, 40.483561],
  [-119.769251, 39.172964],
  [-119.976369, 38.944978],
  [-119.768318, 39.498696],
  [2.548053, 49.010078],
  [25.347933, 37.435035],
  [23.945974, 37.936262],
  [12.33956, 45.505033],
  [12.24641, 41.798999],
  [-77.041433, 38.847974],
  [-73.773327, 40.643029],
  [-73.290942, 42.555801],
  [-8.035881, 31.609807],
  [-77.027418, 38.996319],
  [-77.036426, 38.898603],
  [-115.153213, 36.084264],
  [105.799122, 21.220325],
  [121.234358, 25.078978],
  [-121.016931, 38.941148],
  [103.985321, 1.349743],
  [98.30772, 8.110978],
  [98.964144, 18.770007],
  [115.167007, -8.748375],
  [100.750048, 13.688998],
  [-157.924462, 21.324333],
  [-122.596081, 45.590242],
  [-121.308726, 37.981446],
  [-121.901691, 36.617711],
  [-119.848091, 34.410414],
  [-122.308688, 47.449945],
  [-118.195432, 34.024959],
  [-118.408627, 33.942061],
  [-118.497182, 34.011163],
  [-117.149037, 32.735863],
  [-123.161263, 39.13269],
  [-87.623151, 41.882658],
  [-77.430452, 37.539813],
  [-84.385563, 33.790052],
  [-123.018027, 49.343915],
  [-90.064369, 29.958412]
];
