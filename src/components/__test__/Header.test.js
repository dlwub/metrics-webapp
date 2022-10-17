import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Header from '../Header';

describe('Header', () => {
  it('renders correctly', () => {
    const header = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(header).toMatchSnapshot();
  });
});