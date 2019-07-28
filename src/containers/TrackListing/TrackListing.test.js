import React from 'react';
import { shallow } from 'enzyme';
import { TrackListing } from './TrackListing';

describe('<TrackListing />', () => {
  test('renders', () => {
    const wrapper = shallow(<TrackListing />);
    expect(wrapper).toMatchSnapshot();
  });
});
