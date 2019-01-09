import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import EventMarker from '../src/components/EventMarker';

describe('EventMarker', () => {
  describe('basic', () => {
    const wrapper = shallow(<EventMarker />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
