import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavigationButton from '../src/components/NavigationButton';

describe('NavigationButton', () => {
  describe('basic', () => {
    const wrapper = shallow(
      <NavigationButton id="foobar" label="foobar-button" onClick={jest.fn()} />
    );

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
