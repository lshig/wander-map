import React, { Component } from 'react'
import NavButton from '../NavButton'
import mapboxgl from 'mapbox-gl'
import {
  mapToken,
  mapStyle,
  lifePopupMarkers,
  travelMarkersUnionLocation,
  travelMarkersUnion,
  navButtonOptions
} from './constants'
export default class MapBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      map: null,
      popupMarkers: [],
      markersUnon: []
    }
    this.goToLocation = this.goToLocation.bind(this)
  }
  componentDidMount () {
    // CREATE MAP
    mapboxgl.accessToken = mapToken
    var map = new mapboxgl.Map({
      container: 'map',
      style: mapStyle,
      center: lifePopupMarkers.filter(item => {
        return item.id === 'homeNavButton'
      })[0].location,
      bearing: 0,
      pitch: 0,
      zoom: 13
    })

    // CREATE MARKERS AND POPUPS
    const popupMarkers = lifePopupMarkers.map(item => {
      const primaryMarker = document.createElement('div')
      primaryMarker.className = 'marker'
      const popupContent = document.createElement('div')
      popupContent.className = 'popup'
      popupContent.innerHTML = item.text
      const primaryMarkerPopup = new mapboxgl.Popup({
        closeButton: false,
        anchor: item.anchorPosition,
        offset: 15})
          .setDOMContent(popupContent)
      return {
        id: item.id,
        location: item.location,
        marker: new mapboxgl.Marker(primaryMarker, {offset:[-15, -15]})
          .setLngLat(item.location)
          .setPopup(primaryMarkerPopup)
          .addTo(map),
        popup: primaryMarkerPopup
      }
    })

    // CREATE MARKERS UNION WITH NO POPUPS
    const markersUnion = travelMarkersUnion.map(location => {
      const secondaryMarker = document.createElement('div')
      secondaryMarker.className = 'marker disabled'
      return new mapboxgl.Marker(secondaryMarker, {offset:[-15, -15]})
        .setLngLat(location)
        .addTo(map)
    })

    // SET STATE
    this.setState({
      map: map,
      mapPopupMarkers: popupMarkers,
      mapMarkersUnion: markersUnion
    })
  }
  goToLocation (id, hasPopup) {
    // CLEAR ALL POPUPS
    for (let i = 0; i < this.state.mapPopupMarkers.length; i++) {
      this.state.mapPopupMarkers[i].popup.remove()
    }
    // BASED ON ID, FIND MAP CENTER LOCATION
    if (hasPopup) {
      const flyToLocation = this.state.mapPopupMarkers.filter(item => {
        const foundId = item.id === id
        if (foundId) {
          item.popup.addTo(this.state.map)
        }
        return foundId
      })[0].location
      this.state.map.flyTo({
        zoom: 13,
        speed: 0.3,
        curve: 1,
        center: flyToLocation
      })
    } else {
      this.state.map.flyTo({
        zoom: 3,
        speed: 0.6,
        curve: 1,
        center: travelMarkersUnionLocation
      })
    }
  }
  render () {
    return (
      <div>
        {
          navButtonOptions.map((item,index) => {
            return (
              <NavButton
                key={index}
                id={item.id}
                className={item.className}
                onClick={e => {this.goToLocation(e.target.id, item.hasPopup)}}
                label={item.label}
              />
            )
          })
        }
        <div id="map" />
      </div>
    )
  }
}
