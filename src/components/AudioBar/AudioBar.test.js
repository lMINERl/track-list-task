import React from 'react';
import { shallow } from 'enzyme';
import { AudioBar } from './AudioBar';

describe('<AudioBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<AudioBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
