import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../src/components/NavBar';
import Welcome from '../src/components/Welcome';
import ArtBox from '../src/components/ArtBox';
import Footer from '../src/components/Footer';

describe('Landing page components', () => {
  test('navbar component', () => {
    const Component = renderer.create(<NavBar />).toJSON();
    expect(Component).toMatchSnapshot();
  });

  test('welcome message component', () => {
    const MenuBar = renderer.create(<Welcome />).toJSON();
    expect(MenuBar).toMatchSnapshot();
  });

  test('art box component without images', () => {
    const images = [];
    const Component = renderer.create(<ArtBox images={images} />).toJSON();
    expect(Component).toMatchSnapshot();
  });

  test('art box component with images', () => {
    const images = [
      1, 2,
    ];
    const Component = renderer.create(<ArtBox images={images} />).toJSON();
    expect(Component).toMatchSnapshot();
  });

  test('footer component', () => {
    const Component = renderer.create(<Footer />).toJSON();
    expect(Component).toMatchSnapshot();
  });
});
