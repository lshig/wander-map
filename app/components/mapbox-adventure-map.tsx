import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  controls,
  featuresForControlledPopupMarkers,
  featuresForUncontrolledUnionPopupMarkers,
  flyToCenterCoordinatesByControl,
  getCenterCoordinatesByControl,
  getNavigationClassByControl,
  getPopupClassByControl,
  getPopupMarkerClassByControl,
  openPopupMarkerByControl
} from '../util/controls';
import MapControlButton from './map-control-button';

interface MapboxAdventureMapProps {
  onCreated?(map: mapboxgl.Map): void;
  onLoaded?(map: mapboxgl.Map): void;
  onRemoved?(): void;
}

type Feature = {
  geometry: {
    coordinates: [number, number] | number[];
  };
  properties: FeatureProperties;
};

type FeatureProperties = {
  city: string;
  state: string;
  country: string;
  title?: string;
  description?: string;
  controlId?: string;
};

export type ControlledPopupMarker = {
  controlId: string;
  marker: mapboxgl.Marker;
};

export default function MapboxAdventureMap({
  onCreated,
  onLoaded,
  onRemoved
}: MapboxAdventureMapProps) {
  const [map, setMap] = useState<mapboxgl.Map>();
  const [controlledPopupMarkers, setControlledPopupMarkers] =
    useState<ControlledPopupMarker[]>();
  const [popupMarkers, setPopupMarkers] = useState<mapboxgl.Marker[]>();
  const mapContainerRef = useRef(null);

  const createMapboxPopupMarker = (
    map: mapboxgl.Map,
    coordinates: [number, number],
    popupText: string,
    markerClassName: string,
    popupClassName: string
  ) => {
    const el = document.createElement('div');
    el.className = markerClassName;

    const marker = new mapboxgl.Marker(el)
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({
          closeButton: false,
          offset: 15
        }).setHTML(`<p class="${popupClassName}">${popupText}</p>`)
      )
      .addTo(map);
    return marker;
  };

  const closeAllMapboxPopupMarkers = (popupMarkers: mapboxgl.Marker[]) => {
    popupMarkers.forEach((popupMarker: mapboxgl.Marker) => {
      popupMarker.getPopup().remove();
    });
  };

  const handleMapControlButtonClick = (controlId: string) => {
    if (!map || !popupMarkers || !controlledPopupMarkers) return;

    closeAllMapboxPopupMarkers(popupMarkers);

    // edge case: clicking on travel button does not open a popup marker
    if (controlId !== 'travel-control-button') {
      openPopupMarkerByControl(controlId, controlledPopupMarkers);
    }

    const coordinates = getCenterCoordinatesByControl(controlId);
    flyToCenterCoordinatesByControl(
      controlId,
      map,
      coordinates as [number, number]
    );
  };

  const renderMapMapControlButtons = () => {
    if (!map || !popupMarkers || !controlledPopupMarkers) return null;

    return controls.map((control) => {
      return (
        <MapControlButton
          key={control.id}
          controlId={control.id}
          className={getNavigationClassByControl(control.id)}
          label={control.label}
          onClick={() => handleMapControlButtonClick(control.id)}
        />
      );
    });
  };

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    if (typeof window === 'undefined' || mapContainer === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: mapContainer,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      style: 'mapbox://styles/lizshigetoshi/cjptysz6d6eww2ro91h5aqgyl',
      center: getCenterCoordinatesByControl('home-control-button') as [
        number,
        number
      ],
      bearing: 0,
      pitch: 0,
      zoom: 13
    });

    mapboxMap.dragRotate.disable();
    mapboxMap.touchZoomRotate.disableRotation();

    setMap(mapboxMap);

    if (onCreated) onCreated(mapboxMap);

    if (onLoaded) mapboxMap.once('load', () => onLoaded(mapboxMap));

    return () => {
      mapboxMap.remove();

      setMap(undefined);

      if (onRemoved) onRemoved();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (map) {
      let mapboxPopupMarkers: mapboxgl.Marker[] = [];
      let mapboxControlledPopupMarkers: ControlledPopupMarker[] = [];

      // create and track popup markers for home, work, and education to open on button click
      featuresForControlledPopupMarkers.map((feature: Feature) => {
        const properties = {
          ...feature.properties,
          controlId: feature.properties.controlId ?? '',
          title: feature.properties.title ?? ''
        };
        const markerClass = getPopupMarkerClassByControl(properties.controlId);
        const popupClass = getPopupClassByControl(properties.controlId);
        const mapboxPopupMarker = createMapboxPopupMarker(
          map,
          feature.geometry.coordinates as [number, number],
          properties.title,
          markerClass,
          popupClass
        );

        if (feature.properties.controlId) {
          mapboxControlledPopupMarkers.push({
            controlId: feature.properties.controlId,
            marker: mapboxPopupMarker
          });
        }

        mapboxPopupMarkers.push(mapboxPopupMarker);
      });

      // create popup markers for local, domestic, and international travel
      featuresForUncontrolledUnionPopupMarkers.map((feature: Feature) => {
        const properties = {
          ...feature.properties,
          controlId: feature.properties.controlId ?? '',
          title: feature.properties.title ?? feature.properties.city
        };
        const markerClass = getPopupMarkerClassByControl(properties.controlId);
        const popupClass = getPopupClassByControl(properties.controlId);
        const mapboxPopupMarker = createMapboxPopupMarker(
          map,
          feature.geometry.coordinates as [number, number],
          properties.title,
          markerClass,
          popupClass
        );

        mapboxPopupMarkers.push(mapboxPopupMarker);
      });

      setControlledPopupMarkers(mapboxControlledPopupMarkers);
      setPopupMarkers(mapboxPopupMarkers);
    }
  }, [map]);

  return (
    <>
      {renderMapMapControlButtons()}
      <div ref={mapContainerRef} className="h-full w-full" />
    </>
  );
}
