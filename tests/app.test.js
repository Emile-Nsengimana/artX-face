import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

it('should render a h1 welcome message', () => {
  const welcomeMessage = renderer.create(<App />).toJSON();
  expect(welcomeMessage).toMatchSnapshot();
});
