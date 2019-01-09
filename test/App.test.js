import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../src/components/App';

jest.mock('mapbox-gl', () => {
  return {
    accessToken: 'foobar',
    Map: jest.fn(),
    Marker: jest.fn(() => {
      return {
        setLngLat: jest.fn(() => {
          return {
            addTo: jest.fn(),
            setPopup: jest.fn(() => {
              return {
                addTo: jest.fn()
              };
            })
          };
        })
      };
    }),
    Popup: jest.fn(() => {
      return {
        setDOMContent: jest.fn()
      };
    })
  };
});

describe('App', () => {
  describe('basic', () => {
    const wrapper = shallow(<App />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
