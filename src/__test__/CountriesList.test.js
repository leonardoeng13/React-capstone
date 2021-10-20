import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Country from '../components/countries/Country';
import '@testing-library/jest-dom';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Country
          key="brazil"
          id="1"
          carteName="brazil"
          name="Brazil"
          todayConfirmed={333}
          todayNewConfirmed={54}
        />
      </BrowserRouter>
    </Provider>,
  );
});
afterEach(cleanup);
describe('country components testing', () => {
  test('Brazil country displaying in the browser', () => {
    screen.getByText('Brazil');
    expect(screen.getByText('54 Cases Today')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
