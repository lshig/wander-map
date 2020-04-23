import mapboxgl from 'mapbox-gl';
import React, { Component } from 'react';
import { render } from 'react-dom';
import EventMarker from './EventMarker';
import EventPopup from './EventPopup';
import NavigationButton from './NavigationButton';
import {
  mapStyle,
  mapToken,
  markersUnion,
  markersUnionBaseLocation,
  navigationButtons,
  popupMarkers
} from '../data/constants';

export default class EventMap extends Component {
  map;

  state = {
    mapPopupMarkers: []
  };

  componentDidMount() {
    if (mapboxgl) {
      this.initializeMap();
    }
  }

  initializeMap = () => {
    mapboxgl.accessToken = mapToken;

    this.map = new mapboxgl.Map({
      container: 'map',
      style: mapStyle,
      center: popupMarkers.filter(
        (marker) => marker.id === 'homeNavigationButton'
      )[0].location,
      bearing: 0,
      pitch: 0,
      zoom: 13
    });

    if (this.map) {
      this.addEventMarkers();
      this.addDisabledMarkers();
    }
  };

  addEventMarkers = () => {
    if (this.map) {
      const mapPopupMarkers = popupMarkers.map((marker) => {
        const primaryMarker = document.createElement('div');
        const popupContent = document.createElement('div');

        render(<EventMarker />, primaryMarker);

        render(<EventPopup text={marker.text} />, popupContent);

        const primaryMarkerPopup = new mapboxgl.Popup({
          closeButton: false,
          anchor: marker.anchorPosition,
          offset: 15
        }).setDOMContent(popupContent);

        return {
          id: marker.id,
          location: marker.location,
          marker: new mapboxgl.Marker(primaryMarker)
            .setLngLat(marker.location)
            .setPopup(primaryMarkerPopup)
            .addTo(this.map),
          popup: primaryMarkerPopup
        };
      });

      this.setState({ mapPopupMarkers });
    }
  };

  addDisabledMarkers = () => {
    if (this.map) {
      markersUnion.map((location) => {
        const secondaryMarker = document.createElement('div');

        secondaryMarker.className = 'marker disabled';

        return new mapboxgl.Marker(secondaryMarker)
          .setLngLat(location)
          .addTo(this.map);
      });
    }
  };

  goToLocation = (id, hasPopup) => {
    const { mapPopupMarkers } = this.state;

    // Clear all popups
    for (let i = 0; i < mapPopupMarkers.length; i++) {
      mapPopupMarkers[i].popup.remove();
    }

    // Based on ID, find map center location
    if (this.map) {
      if (hasPopup) {
        const flyToLocation = mapPopupMarkers.filter((marker) => {
          const foundId = marker.id === id;

          if (foundId) {
            marker.popup.addTo(this.map);
          }

          return foundId;
        })[0].location;

        this.map.flyTo({
          zoom: 13,
          speed: 0.3,
          curve: 1,
          center: flyToLocation
        });
      } else {
        this.map.flyTo({
          zoom: 3,
          speed: 0.6,
          curve: 1,
          center: markersUnionBaseLocation
        });
      }
    }
  };

  renderNavigation() {
    return navigationButtons.map((button, index) => {
      return (
        <NavigationButton
          id={button.id}
          key={index}
          label={button.label}
          onClick={(e) => {
            this.goToLocation(e.target.id, button.hasPopup);
          }}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderNavigation()}
        <div id="map" />
      </div>
    );
  }
}
