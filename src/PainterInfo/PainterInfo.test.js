import React from 'react'
import PainterInfo from './PainterInfo'
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';

describe('Painter Page', () => {
  const info = {artistName:"Leonardo Da Vinci"}

  it('should display all nav elements on load', () => {
    const { getByTestId } = render(<MemoryRouter><PainterInfo info={info}/></MemoryRouter>);
    const backButton = getByTestId('ArtisTry')
    const saveButton = getByTestId("Leonardo Da Vinci")
    expect(backButton).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
  })

  it('should render a gallery', () => {
    const { getByLabelText } = render(<MemoryRouter><PainterInfo info = {info}/></MemoryRouter>);
    const gallery = getByLabelText('gallery')
    expect(gallery).toBeInTheDocument()
  })
})