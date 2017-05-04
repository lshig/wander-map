webpackJsonp([0],{

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _Interactive = __webpack_require__(84);

var _Interactive2 = _interopRequireDefault(_Interactive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      'a',
      { href: 'http://lizshigetoshi.com', target: '_blank' },
      _react2.default.createElement(
        'h1',
        { id: 'lizshigetoshi' },
        'Liz Shigetoshi'
      )
    ),
    _react2.default.createElement(_Interactive2.default, null)
  );
};
exports.default = App;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var mapToken = exports.mapToken = 'pk.eyJ1IjoibGl6c2hpZyIsImEiOiJjajI2aWRwbHcwMGdwMnFvNWdyZzZkMnoxIn0.ijXLCu9J588oipJzYGOppg';
var mapStyle = exports.mapStyle = 'mapbox://styles/lizshig/cj29cralq000p2rpk8txr8ay5';
// these markers have their own popup
var markersWithPopups = exports.markersWithPopups = [{
  id: 'homeNavButton',
  location: [-121.493225, 38.576514],
  anchorPosition: 'left',
  text: '#SacramentoProud'
}, {
  id: 'almaMaterNavButton',
  location: [-121.754749, 38.536998],
  anchorPosition: 'right',
  text: 'UC Davis: Department of Computer Science'
}, {
  id: 'pastExpNavButton',
  location: [-121.750728, 38.536076],
  anchorPosition: 'top',
  text: 'UC Davis: Energy Conservation Office'
}, {
  id: 'newAdventureNavButton',
  location: [-122.413682, 37.775408],
  anchorPosition: 'top',
  text: 'Hello, World!'
}];

// these markers are united with no popups
var markersUnionCenter = exports.markersUnionCenter = [113.437591, 15.549823];
var markersUnion = exports.markersUnion = [[-3.568016, 40.483561], [-119.769251, 39.172964], [-119.976369, 38.944978], [-119.768318, 39.498696], [2.548053, 49.010078], [25.347933, 37.435035], [23.945974, 37.936262], [12.339560, 45.505033], [12.246410, 41.798999], [-77.041433, 38.847974], [-73.773327, 40.643029], [-73.290942, 42.555801], [-8.035881, 31.609807], [-77.027418, 38.996319], [-77.036426, 38.898603], [-115.153213, 36.084264], [105.799122, 21.220325], [121.234358, 25.078978], [103.985321, 1.349743], [98.307720, 8.110978], [98.964144, 18.770007], [115.167007, -8.748375], [100.750048, 13.688998], [-157.924462, 21.324333], [-122.596081, 45.590242], [-122.308688, 47.449945]];

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _mapboxGl = __webpack_require__(100);

var _mapboxGl2 = _interopRequireDefault(_mapboxGl);

var _constants = __webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Interactive = function (_Component) {
  _inherits(Interactive, _Component);

  function Interactive(props) {
    _classCallCheck(this, Interactive);

    var _this = _possibleConstructorReturn(this, (Interactive.__proto__ || Object.getPrototypeOf(Interactive)).call(this, props));

    _this.state = {
      map: null,
      life: [],
      travel: []
    };
    _this.goToLocation = _this.goToLocation.bind(_this);
    return _this;
  }

  _createClass(Interactive, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // CREATE MAP
      _mapboxGl2.default.accessToken = _constants.mapToken;
      var map = new _mapboxGl2.default.Map({
        container: 'map',
        style: _constants.mapStyle,
        center: _constants.markersWithPopups.filter(function (item) {
          return item.id === 'homeNavButton';
        })[0].location,
        bearing: 0,
        pitch: 0,
        zoom: 13
      });

      // CREATE MARKERS AND POPUPS
      var lifeMarkers = _constants.markersWithPopups.map(function (item) {
        var primaryMarker = document.createElement('div');
        primaryMarker.className = 'marker';

        var div = document.createElement('div');
        div.className = 'popup ' + item.className;
        div.innerHTML = item.text;
        var primaryMarkerPopup = new _mapboxGl2.default.Popup({
          closeButton: false,
          anchor: item.anchorPosition,
          offset: 15 }).setDOMContent(div);
        return {
          id: item.id,
          location: item.location,
          marker: new _mapboxGl2.default.Marker(primaryMarker, { offset: [-15, -15] }).setLngLat(item.location).setPopup(primaryMarkerPopup).addTo(map),
          popup: primaryMarkerPopup
        };
      });

      // CREATE MARKERS UNION WITH NO POPUPS
      var travelMarkers = _constants.markersUnion.map(function (location) {
        var secondaryMarker = document.createElement('div');
        secondaryMarker.className = 'marker';
        return new _mapboxGl2.default.Marker(secondaryMarker, { offset: [-15, -15] }).setLngLat(location).addTo(map);
      });

      // SET STATE
      this.setState({
        map: map,
        life: lifeMarkers,
        travel: travelMarkers
      });
    }
  }, {
    key: 'goToLocation',
    value: function goToLocation(id, hasPopup) {
      var _this2 = this;

      // CLEAR ALL POPUPS
      for (var i = 0; i < this.state.life.length; i++) {
        this.state.life[i].popup.remove();
      }
      // BASED ON ID, FIND MAP CENTER LOCATION
      if (hasPopup) {
        var flyToLocation = this.state.life.filter(function (item) {
          var foundId = item.id === id;
          if (foundId) {
            item.popup.addTo(_this2.state.map);
          }
          return foundId;
        })[0].location;
        this.state.map.flyTo({
          zoom: 13,
          speed: 0.3,
          curve: 1,
          center: flyToLocation
        });
      } else {
        this.state.map.flyTo({
          zoom: 3,
          speed: 0.6,
          curve: 1,
          center: _constants.markersUnionCenter
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          {
            id: 'homeNavButton',
            className: 'mapNavigation',
            onClick: function onClick(e) {
              _this3.goToLocation(e.target.id, true);
            } },
          '916 born-n-raised'
        ),
        _react2.default.createElement(
          'h3',
          {
            id: 'almaMaterNavButton',
            className: 'mapNavigation',
            onClick: function onClick(e) {
              _this3.goToLocation(e.target.id, true);
            } },
          'earned a BS degree'
        ),
        _react2.default.createElement(
          'h3',
          {
            id: 'pastExpNavButton',
            className: 'mapNavigation',
            onClick: function onClick(e) {
              _this3.goToLocation(e.target.id, true);
            } },
          'developed web apps'
        ),
        _react2.default.createElement(
          'h3',
          {
            id: 'travelNavButton',
            className: 'mapNavigation',
            onClick: function onClick(e) {
              _this3.goToLocation(e.target.id, false);
            } },
          'explored cultures'
        ),
        _react2.default.createElement(
          'h3',
          {
            id: 'newAdventureNavButton',
            className: 'mapNavigation',
            onClick: function onClick(e) {
              _this3.goToLocation(e.target.id, true);
            } },
          'ready for more!'
        ),
        _react2.default.createElement('div', { id: 'map' })
      );
    }
  }]);

  return Interactive;
}(_react.Component);

exports.default = Interactive;

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(82);

var _App = __webpack_require__(81);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ })

},[85]);