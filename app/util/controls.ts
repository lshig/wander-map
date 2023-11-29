import home from '../data/home.json';
import work from '../data/work.json';
import education from '../data/education.json';
import parks from '../data/parks.json';
import california from '../data/california.json';
import domesticTravel from '../data/domestic-travel.json';
import internationalTravel from '../data/international-travel.json';
import classNames from 'classnames';
import { roboto_mono } from './fonts';
import { ControlledPopupMarker } from '../components/mapbox-adventure-map';

const CENTER_COORDINATES_FOR_HOME = [-121.4996269, 38.5801278];
const CENTER_COORDINATES_FOR_EDUCATION = [-121.754749, 38.536998];
const CENTER_COORDINATES_FOR_WORK = [-122.396286, 37.791293];
const CENTER_COORDINATES_FOR_TRAVEL = [112.417591, 13.529823];

export const controls = [
  {
    id: 'work-control-button',
    label: 'built web apps & APIs',
    coordinates: CENTER_COORDINATES_FOR_WORK
  },
  {
    id: 'education-control-button',
    label: 'earned a BS degree',
    coordinates: CENTER_COORDINATES_FOR_EDUCATION
  },
  {
    id: 'travel-control-button',
    label: 'wandered around',
    coordinates: CENTER_COORDINATES_FOR_TRAVEL
  },
  {
    id: 'home-control-button',
    label: '916 born-n-raised',
    coordinates: CENTER_COORDINATES_FOR_HOME
  }
];

export const getCenterCoordinatesByControl = (controlId: string) => {
  switch (controlId) {
    case 'work-control-button':
      return CENTER_COORDINATES_FOR_WORK;
    case 'education-control-button':
      return CENTER_COORDINATES_FOR_EDUCATION;
    case 'home-control-button':
      return CENTER_COORDINATES_FOR_HOME;
    default:
      return CENTER_COORDINATES_FOR_TRAVEL;
  }
};

export const flyToCenterCoordinatesByControl = (
  controlId: string,
  map: mapboxgl.Map,
  coordinates: [number, number]
) => {
  if (controlId === 'travel-control-button') {
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
export const openPopupMarkerByControl = (
  controlId: string,
  controlledPopupMarkers: ControlledPopupMarker[]
) => {
  controlledPopupMarkers.map((controlledPopupMarker: ControlledPopupMarker) => {
    if (controlledPopupMarker.controlId === controlId) {
      controlledPopupMarker.marker.togglePopup();
    }
  });
};

export const getPopupMarkerClassByControl = (controlId: string) => {
  return classNames('rounded-full pointer h-4 w-4 !opacity-60', {
    'bg-work': controlId === 'work-control-button',
    'bg-education': controlId === 'education-control-button',
    'bg-home': controlId === 'home-control-button',
    'bg-travel':
      controlId !== 'home-control-button' &&
      controlId !== 'work-control-button' &&
      controlId !== 'education-control-button'
  });
};

export const getPopupClassByControl = (controlId: string) => {
  return classNames(roboto_mono.className, {
    'text-xl': controlId === 'home-control-button',
    'font-medium text-sm text-primary-dark tracking-wider uppercase text-center max-w-140':
      controlId !== 'home-control-button'
  });
};

export const getNavigationClassByControl = (controlId: string) => {
  return classNames(
    `${roboto_mono.className} font-light text-xl text-secondary-light hover:font-bold hover:tracking-wide rounded-l-sm bg-secondary-dark opacity-80 my-2.5 mx-0 py-1 px-2 absolute right-0 z-10 cursor-pointer`,
    {
      'hover:bg-work hover:text-secondary-light top-50':
        controlId === 'work-control-button',
      'hover:bg-education hover:text-secondary-dark top-90':
        controlId === 'education-control-button',
      'hover:bg-travel hover:text-secondary-light top-130':
        controlId === 'travel-control-button',
      'hover:bg-home hover:text-secondary-light top-170':
        controlId === 'home-control-button'
    }
  );
};

export const featuresForControlledPopupMarkers = home.features.concat(
  work.features,
  education.features
);

export const featuresForUncontrolledUnionPopupMarkers =
  internationalTravel.features.concat(
    domesticTravel.features,
    parks.features,
    california.features
  );
