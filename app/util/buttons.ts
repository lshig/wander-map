import home from '../data/home.json';
import work from '../data/work.json';
import education from '../data/education.json';
import parks from '../data/parks.json';
import california from '../data/california.json';
import domesticTravel from '../data/domestic-travel.json';
import internationalTravel from '../data/international-travel.json';

const CENTER_COORDINATES_FOR_HOME = [-121.4996269, 38.5801278];
const CENTER_COORDINATES_FOR_EDUCATION = [-121.754749, 38.536998];
const CENTER_COORDINATES_FOR_WORK = [-122.396286, 37.791293];
const CENTER_COORDINATES_FOR_TRAVEL = [112.417591, 13.529823];

export const getCenterCoordinatesByButton = (buttonId: string) => {
  switch (buttonId) {
    case 'work-button':
      return CENTER_COORDINATES_FOR_WORK;
    case 'education-button':
      return CENTER_COORDINATES_FOR_EDUCATION;
    case 'home-button':
      return CENTER_COORDINATES_FOR_HOME;
    default:
      return CENTER_COORDINATES_FOR_TRAVEL;
  }
};

export const getPopupMarkerClassByButton = (buttonId: string) => {
  switch (buttonId) {
    case 'work-button':
      return 'marker work';
    case 'education-button':
      return 'marker education';
    case 'home-button':
      return 'marker home';
    default:
      return 'marker travel';
  }
};

export const getPopupClassByButton = (buttonId: string) => {
  switch (buttonId) {
    case 'home-button':
      return 'popup emoji';
    default:
      return 'popup';
  }
};

export const featuresForOpenPopupMarkersButtons = home.features.concat(
  work.features,
  education.features
);

export const featuresForUnionPopupMarkersButton =
  internationalTravel.features.concat(
    domesticTravel.features,
    parks.features,
    california.features
  );
