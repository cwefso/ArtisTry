import React from 'react'
import PainterInfo from './PainterInfo'
import { render, waitFor, fireEvent, screen, within } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import usePaintings from '../Hooks/usePaintings';
// jest.mock('../Hooks/usePaintings')

describe('Painter Page', () => {
  const info = {artistName:"Leonardo Da Vinci"}

  it('should display all nav elements on load', () => {
    const { getByTestId } = render(<MemoryRouter><PainterInfo info={info}/></MemoryRouter>);
    const backButton = getByTestId('ArtisTry')
    const saveButton = getByTestId("Leonardo Da Vinci")
    expect(backButton).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
  })

  it('should render a gallery', async () => {
    // const usePaintings = jest.fn()


  //    usePaintings.mockReturnValueOnce({
  //      paintings: [
  //     {
  //       "title": "The River Thames with St. Paul's Cathedral on Lord Mayor's Day",
  //       "contentId": 250550,
  //       "artistContentId": 250406,
  //       "artistName": "Canaletto",
  //       "completitionYear": 1746,
  //       "yearAsString": "1746",
  //       "width": 1296,
  //       "image": "https://uploads6.wikiart.org/images/canaletto/the-river-thames-with-st-paul-s-cathedral-on-lord-mayor-s-day.jpg!Large.jpg",
  //       "height": 676,
  //       "name": 'image',
  //       "testId": 42
  //     }, {
  //       "title": "Just what is it that makes today's homes so different, so appealing?",
  //       "contentId": 243774,
  //       "artistContentId": 243771,
  //       "artistName": "Richard Hamilton",
  //       "completitionYear": 1956,
  //       "yearAsString": "1956",
  //       "width": 1211,
  //       "image": "https://uploads3.wikiart.org/images/richard-hamilton/http-en-wikipedia-org-wiki-file-hamilton-appealing2-jpg-1956.jpg!Large.jpg",
  //       "height": 1260,
  //       "name": 'image'
  //     }, {
  //       "title": "Cape Cod Morning",
  //       "contentId": 235538,
  //       "artistContentId": 235517,
  //       "artistName": "Edward Hopper",
  //       "completitionYear": 1950,
  //       "yearAsString": "1950",
  //       "width": 1000,
  //       "image": "https://uploads1.wikiart.org/images/edward-hopper/cape-cod-morning.jpg!Large.jpg",
  //       "height": 857,
  //       "name": 'image'
  //     }

  //   ]
  // })

      const { getByLabelText, getByAltText } = render(<MemoryRouter><PainterInfo info = {info}/></MemoryRouter>);

      const gallery = getByLabelText('gallery')
      // const paintings = await waitFor(() => within(gallery).getByAltText(`The River Thames with St. Paul's Cathedral on Lord Mayor's Day`))
      // console.log(paintings);
      
      expect(gallery).toBeInTheDocument()
    })
})