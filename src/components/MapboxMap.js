import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import NavigationButton from './NavigationButton';
import {
  mapStyle,
  mapToken,
  markersUnion,
  markersUnionBaseLocation,
  navigationButtons,
  popupMarkers
} from '../data/constants';

export default class MapboxMap extends Component {
  state = {
    map: null,
    popupMarkers: [],
    markersUnon: []
  };

  componentDidMount() {
    // Create map
    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
      container: 'map',
      style: mapStyle,
      center: popupMarkers.filter(
        marker => marker.id === 'homeNavigationButton'
      )[0].location,
      bearing: 0,
      pitch: 0,
      zoom: 13
    });

    // Create map and popups
    const mapPopupMarkers = popupMarkers.map(marker => {
      const primaryMarker = document.createElement('div');
      const popupContent = document.createElement('div');

      primaryMarker.className = 'marker';
      popupContent.className = 'popup';
      popupContent.innerHTML = marker.text;

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
          .addTo(map),
        popup: primaryMarkerPopup
      };
    });

    // Create markers union without popups
    const mapMarkersUnion = markersUnion.map(location => {
      const secondaryMarker = document.createElement('div');

      secondaryMarker.className = 'marker disabled';

      return new mapboxgl.Marker(secondaryMarker)
        .setLngLat(location)
        .addTo(map);
    });

    this.setState({
      map: map,
      mapPopupMarkers: mapPopupMarkers,
      mapMarkersUnion: mapMarkersUnion
    });
  }

  goToLocation(id, hasPopup) {
    const { map, mapPopupMarkers } = this.state;

    // Clear all popups
    for (let i = 0; i < mapPopupMarkers.length; i++) {
      mapPopupMarkers[i].popup.remove();
    }

    // Based on ID, find map center location
    if (hasPopup) {
      const flyToLocation = mapPopupMarkers.filter(marker => {
        const foundId = marker.id === id;

        if (foundId) {
          marker.popup.addTo(map);
        }

        return foundId;
      })[0].location;

      map.flyTo({
        zoom: 13,
        speed: 0.3,
        curve: 1,
        center: flyToLocation
      });
    } else {
      map.flyTo({
        zoom: 3,
        speed: 0.6,
        curve: 1,
        center: markersUnionBaseLocation
      });
    }
  }

  renderNavigation() {
    return navigationButtons.map((button, index) => {
      return (
        <NavigationButton
          id={button.id}
          key={index}
          label={button.label}
          onClick={e => {
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
