import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SEO from '../src/components/SEO';

describe('SEO', () => {
  describe('basic', () => {
    const wrapper = shallow(<SEO />);

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
