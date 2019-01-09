/**
 * @jest-environment jsdom
 */
import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import EventMap from '../src/components/EventMap';

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

describe('EventMap', () => {
  describe('basic', () => {
    const wrapper = shallow(<EventMap />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
