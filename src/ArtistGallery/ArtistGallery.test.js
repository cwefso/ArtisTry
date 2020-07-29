import React from 'react'
import ArtistGallery from './ArtistGallery'
import {
  render, waitFor, fireEvent, screen, within
} from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'
import usePaintings from '../Hooks/usePaintings'
// jest.mock('../Hooks/usePaintings')

describe('Painter Page', () => {
  const info = { artistName: 'Leonardo Da Vinci' }

  it('should display all nav elements on load', () => {
    const { getByTestId } = render(<MemoryRouter><ArtistGallery info={info} /></MemoryRouter>)
    const backButton = getByTestId('ArtisTry')
    const saveButton = getByTestId('Leonardo Da Vinci')
    expect(backButton).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
  })

  it('should render a gallery', async () => {
    const { getByLabelText } = render(<MemoryRouter><ArtistGallery info={info} /></MemoryRouter>)
    const gallery = getByLabelText('gallery')
    expect(gallery).toBeInTheDocument()
  })
})
