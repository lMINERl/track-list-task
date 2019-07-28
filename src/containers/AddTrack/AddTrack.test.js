import React from 'react';
import { shallow } from 'enzyme';
import { AddTrack } from './AddTrack';

describe('<AddTrack />', () => {
  test('renders', () => {
    const wrapper = shallow(<AddTrack />);
    expect(wrapper).toMatchSnapshot();
  });
});
