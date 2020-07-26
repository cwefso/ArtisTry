import React from 'react'
import PainterInfo from './PainterInfo'
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';

describe('Painter Page', () => {
  const artistName = "Leonardo Da Vinci"

  it('should display all nav elements on load', () => {
    const { getByAltText } = render(<MemoryRouter><PainterInfo info={artistName}/></MemoryRouter>);
    const backButton = getByAltText("back-btn")
    const saveButton = getByAltText("save-btn")
    expect(backButton).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
  })

  it('should render a gallery', () => {
    const { getByLabelText } = render(<MemoryRouter><PainterInfo artistName= {artistName}/></MemoryRouter>);
    const gallery = getByLabelText('gallery')
    expect(gallery).toBeInTheDocument()
  })
})