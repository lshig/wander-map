import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import EventPopup from '../src/components/EventPopup';

describe('EventPopup', () => {
  describe('basic', () => {
    const wrapper = shallow(
      <EventPopup text="Okinawa milk tea with egg pudding. 80% sweetness. 30% ice." />
    );

    test('renders', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
