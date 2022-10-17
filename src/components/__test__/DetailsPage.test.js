import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import DetailsPage from '../DetailsPage';

describe('DetailsPage', () => {
  it('renders correctly', () => {
    const tree = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <DetailsPage />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
