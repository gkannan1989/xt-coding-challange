import React from 'react';
import renderer from 'react-test-renderer';
import NewsFeedHeader from '../NewsFeedHeader.js';

it('renders', () => {
  const component = renderer.create(<NewsFeedHeader />).toJSON();
  expect(component).toMatchSnapshot();
});
