/**
 * @jest-environment jsdom
 */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MapboxMap from '../src/components/MapboxMap';

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

describe('MapboxMap', () => {
  describe('basic', () => {
    const wrapper = shallow(<MapboxMap />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
