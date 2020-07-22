import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery'
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import App from '../App/App'

describe.skip('Gallery', () => {
  // it('should render and display all the paintings', () => {
  //   const section = document.createElement('section');
  //   ReactDOM.render(<Gallery />, section);
  //   ReactDOM.unmountComponentAtNode(section);
  // })
  
  it('renders loading message', () => {
    const { getByText } = render(<Gallery />);
    const loadingMessage = getByText("Loading Collection");
    expect(loadingMessage).toBeInTheDocument();
  });
})