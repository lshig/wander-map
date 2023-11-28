import { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  getCenterCoordinatesByButton,
  getPopupMarkerClassByButton,
  getPopupClassByButton,
  featuresForOpenPopupMarkersButtons,
  featuresForUnionPopupMarkersButton
} from '../util/buttons';
import NavigationButton from './navigation-button';

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
  button?: string;
};

type ButtonPopupMarker = { buttonId: string; marker: mapboxgl.Marker };

export default function MapboxAdventureMap({
  onCreated,
  onLoaded,
  onRemoved
}: MapboxAdventureMapProps) {
  const [map, setMap] = useState<mapboxgl.Map>();
  const [buttonPopupMarkers, setbuttonPopupMarkers] =
    useState<ButtonPopupMarker[]>();
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

  const flyToCenterCoordinates = (
    map: mapboxgl.Map,
    buttonId: string,
    coordinates: [number, number]
  ) => {
    if (buttonId === 'travel-button') {
      map.flyTo({
        zoom: 3,
        speed: 0.6,
        curve: 1,
        center: coordinates
      });
    } else {
      map.flyTo({
        zoom: 13,
        speed: 0.3,
        curve: 1,
        center: coordinates
      });
    }
  };

  const closeAllPopupMarkers = (popupMarkers: mapboxgl.Marker[]) => {
    popupMarkers.forEach((popupMarker: mapboxgl.Marker) => {
      popupMarker.getPopup().remove();
    });
  };

  const openPopupMarkerByButton = (
    buttonPopupMarkers: ButtonPopupMarker[],
    navigationButtonId: string
  ) => {
    buttonPopupMarkers.map((buttonPopupMarker: ButtonPopupMarker) => {
      if (buttonPopupMarker.buttonId === navigationButtonId) {
        buttonPopupMarker.marker.togglePopup();
      }
    });
  };

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    if (typeof window === 'undefined' || mapContainer === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: mapContainer,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      style: 'mapbox://styles/lizshigetoshi/cjptysz6d6eww2ro91h5aqgyl',
      center: getCenterCoordinatesByButton('home-button') as [number, number],
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
      let mapboxbuttonPopupMarkers: ButtonPopupMarker[] = [];

      // create and track popup markers for home, work, and education to open on button click
      featuresForOpenPopupMarkersButtons.map((feature: Feature) => {
        const properties = {
          ...feature.properties,
          button: feature.properties.button ?? '',
          title: feature.properties.title ?? ''
        };
        const markerClass = getPopupMarkerClassByButton(properties.button);
        const popupClass = getPopupClassByButton(properties.button);
        const mapboxPopupMarker = createMapboxPopupMarker(
          map,
          feature.geometry.coordinates as [number, number],
          properties.title,
          markerClass,
          popupClass
        );

        if (feature.properties.button) {
          mapboxbuttonPopupMarkers.push({
            buttonId: feature.properties.button,
            marker: mapboxPopupMarker
          });
        }

        mapboxPopupMarkers.push(mapboxPopupMarker);
      });

      // create popup markers for local, domestic, and international travel
      featuresForUnionPopupMarkersButton.map((feature: Feature) => {
        const properties = {
          ...feature.properties,
          button: feature.properties.button ?? '',
          title: feature.properties.title ?? feature.properties.city
        };
        const markerClass = getPopupMarkerClassByButton(properties.button);
        const popupClass = getPopupClassByButton(properties.button);
        const mapboxPopupMarker = createMapboxPopupMarker(
          map,
          feature.geometry.coordinates as [number, number],
          properties.title,
          markerClass,
          popupClass
        );

        mapboxPopupMarkers.push(mapboxPopupMarker);
      });

      setbuttonPopupMarkers(mapboxbuttonPopupMarkers);
      setPopupMarkers(mapboxPopupMarkers);
    }
  }, [map]);

  return (
    <>
      <NavigationButton
        buttonId="home-button"
        label="916 born-n-raised"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.target as HTMLButtonElement;
          if (map && popupMarkers && buttonPopupMarkers) {
            closeAllPopupMarkers(popupMarkers);
            openPopupMarkerByButton(buttonPopupMarkers, 'home-button');

            const coordinates = getCenterCoordinatesByButton('home-button');
            flyToCenterCoordinates(
              map,
              target.id,
              coordinates as [number, number]
            );
          }
        }}
      />
      <NavigationButton
        buttonId="work-button"
        label="built web apps & APIs"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.target as HTMLButtonElement;
          if (map && popupMarkers && buttonPopupMarkers) {
            closeAllPopupMarkers(popupMarkers);
            openPopupMarkerByButton(buttonPopupMarkers, 'work-button');

            const coordinates = getCenterCoordinatesByButton('work-button');
            flyToCenterCoordinates(
              map,
              target.id,
              coordinates as [number, number]
            );
          }
        }}
      />
      <NavigationButton
        buttonId="education-button"
        label="earned a BS degree"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.target as HTMLButtonElement;
          if (map && popupMarkers && buttonPopupMarkers) {
            closeAllPopupMarkers(popupMarkers);
            openPopupMarkerByButton(buttonPopupMarkers, 'education-button');

            const coordinates =
              getCenterCoordinatesByButton('education-button');
            flyToCenterCoordinates(
              map,
              target.id,
              coordinates as [number, number]
            );
          }
        }}
      />
      <NavigationButton
        buttonId="travel-button"
        label="wandered around"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          const target = e.target as HTMLButtonElement;
          if (map && popupMarkers) {
            closeAllPopupMarkers(popupMarkers);

            const coordinates = getCenterCoordinatesByButton('travel-button');
            flyToCenterCoordinates(
              map,
              target.id,
              coordinates as [number, number]
            );
          }
        }}
      />
      <div ref={mapContainerRef} className="h-full w-full" />
    </>
  );
}
