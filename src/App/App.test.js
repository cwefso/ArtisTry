import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render App', () => {
    const section = document.createElement('section');
    ReactDOM.render(<App />, section);
    ReactDOM.unmountComponentAtNode(section);
  })

  it('should display all nav elements on load', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<App />);
    const pageTitle = getByText('ArtisTry')
    const usernameInput = getByPlaceholderText('username')
    const passwordInput = getByPlaceholderText('password')
    const loginBtn = getByRole('button')
    expect(pageTitle).toBeInTheDocument()
    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(loginBtn).toBeInTheDocument()
  })

})
