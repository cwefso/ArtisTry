import React from 'react'
import RandomArt from './RandomArt'
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';

describe('Explore Page', () => {

  it('should display all nav elements on load', () => {
    const { getByText,  getByRole } = render(<MemoryRouter><RandomArt /></MemoryRouter>);
    const pageTitle = getByText('ArtisTry')
    const galleryLink = getByRole('link', {name: 'My Gallery'}) 
    const exploreLink = getByRole('button', {name: 'Explore'}) 
    expect(pageTitle).toBeInTheDocument()
    expect(galleryLink).toBeInTheDocument()
    expect(exploreLink).toBeInTheDocument()
  })

  it('should display loading fetch message', () => {
    const { getByText } = render(<MemoryRouter><RandomArt /></MemoryRouter>)
    const loadingMessage = getByText('Loading Collection')
    expect(loadingMessage).toBeInTheDocument()
  })

  it('should render a gallery', () => {
    const { getByLabelText } = render(<MemoryRouter><RandomArt /></MemoryRouter>);
    const gallery = getByLabelText('gallery')
    expect(gallery).toBeInTheDocument()
  })
})
