import React from 'react';
import renderer from 'react-test-renderer';
import Chart from '../Chart.js';

it('renders', () => {
  const component = renderer.create(<Chart />).toJSON();
  expect(component).toMatchSnapshot();
}); 