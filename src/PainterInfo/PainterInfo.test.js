import React from 'react'
import PainterInfo from './PainterInfo'
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
// import { createMemoryHistory } from 'history';

describe('Painter Page', () => {
  it('should render a gallery', async () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <PainterInfo info={{artistName: "Leonardo Da Vinci" }} />
      </MemoryRouter>
    );
    const gallery = getByLabelText('gallery')
    expect(gallery).toBeInTheDocument()
  })
  
  it('should display all nav elements on load', async () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <PainterInfo info={{artistName: "Leonardo Da Vinci" }} />
      </MemoryRouter>
    );
    const artistTitle = getByText('Leonardo Da Vinci')
    const homeButton = getByRole("link", { getByText: "ArtistTry" })
    expect(artistTitle).toBeInTheDocument()
    expect(homeButton).toBeInTheDocument()
  })
})
