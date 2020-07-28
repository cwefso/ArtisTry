import React from 'react'
import RandomArt from './RandomArt'
import {
  render, waitFor, fireEvent, screen
} from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { createMemoryHistory } from 'history'

const paintings = [
  {
    title: "The River Thames with St. Paul's Cathedral on Lord Mayor's Day",
    contentId: 250550,
    artistContentId: 250406,
    artistName: 'Canaletto',
    completitionYear: 1746,
    yearAsString: '1746',
    width: 1296,
    image: 'https://uploads6.wikiart.org/images/canaletto/the-river-thames-with-st-paul-s-cathedral-on-lord-mayor-s-day.jpg!Large.jpg',
    height: 676,
    name: 'image',
    testId: 42
  },
  {
    title: "Just what is it that makes today's homes so different, so appealing?",
    contentId: 243774,
    artistContentId: 243771,
    artistName: 'Richard Hamilton',
    completitionYear: 1956,
    yearAsString: '1956',
    width: 1211,
    image: 'https://uploads3.wikiart.org/images/richard-hamilton/http-en-wikipedia-org-wiki-file-hamilton-appealing2-jpg-1956.jpg!Large.jpg',
    height: 1260,
    name: 'image'
  },
  {
    title: 'Cape Cod Morning',
    contentId: 235538,
    artistContentId: 235517,
    artistName: 'Edward Hopper',
    completitionYear: 1950,
    yearAsString: '1950',
    width: 1000,
    image: 'https://uploads1.wikiart.org/images/edward-hopper/cape-cod-morning.jpg!Large.jpg',
    height: 857,
    name: 'image'
  }
]

describe('Explore Page', () => {
  it('should display all nav elements on load', () => {
    const { getByText, getByRole } = render(<MemoryRouter><RandomArt /></MemoryRouter>)
    const pageTitle = getByText('ArtisTry')
    const galleryLink = getByRole('link', { name: 'My Gallery' })
    const exploreLink = getByRole('button', { name: 'Explore' })
    expect(pageTitle).toBeInTheDocument()
    expect(galleryLink).toBeInTheDocument()
    expect(exploreLink).toBeInTheDocument()
  })

  it('should display loading fetch message', () => {
    const { getByText } = render(<MemoryRouter><RandomArt /></MemoryRouter>)
    const loadingMessage = getByText('Loading Collection...')
    expect(loadingMessage).toBeInTheDocument()
  })

  it('should render a gallery', () => {
    const { getByLabelText } = render(<MemoryRouter><RandomArt /></MemoryRouter>)
    const gallery = getByLabelText('gallery')
    expect(gallery).toBeInTheDocument()
  })
})
