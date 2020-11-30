import React from 'react';
import renderer from 'react-test-renderer';
import NewsFeed from '../NewsFeed.js';

it('renders', () => {
  const component = renderer.create(<NewsFeed />).toJSON();
  expect(component).toMatchSnapshot();
});