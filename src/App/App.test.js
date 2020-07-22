import React from 'react';
// import ReactDOM from 'react-dom';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { getPaintings } from '../apiCalls'
jest.mock('../apiCalls.js')

describe('App', () => {
  const originalError = console.error
  beforeAll(() => {
    console.error = (...args) => {
      if (/Warning.*not wrapped in act/.test(args[0])) {
        return
      }
      originalError.call(console, ...args)
    }
  })

  getPaintings.mockResolvedValue([
    {
      "title": "The River Thames with St. Paul's Cathedral on Lord Mayor's Day",
      "contentId": 250550,
      "artistContentId": 250406,
      "artistName": "Canaletto",
      "completitionYear": 1746,
      "yearAsString": "1746",
      "width": 1296,
      "image": "https://uploads6.wikiart.org/images/canaletto/the-river-thames-with-st-paul-s-cathedral-on-lord-mayor-s-day.jpg!Large.jpg",
      "height": 676
    },
    {
      "title": "Just what is it that makes today's homes so different, so appealing?",
      "contentId": 243774,
      "artistContentId": 243771,
      "artistName": "Richard Hamilton",
      "completitionYear": 1956,
      "yearAsString": "1956",
      "width": 1211,
      "image": "https://uploads3.wikiart.org/images/richard-hamilton/http-en-wikipedia-org-wiki-file-hamilton-appealing2-jpg-1956.jpg!Large.jpg",
      "height": 1260
    },
    {
      "title": "Cape Cod Morning",
      "contentId": 235538,
      "artistContentId": 235517,
      "artistName": "Edward Hopper",
      "completitionYear": 1950,
      "yearAsString": "1950",
      "width": 1000,
      "image": "https://uploads1.wikiart.org/images/edward-hopper/cape-cod-morning.jpg!Large.jpg",
      "height": 857
    }
  ])

  it('should display all nav elements on load', () => {
    const { getByText, getByPlaceholderText, getByRole } = render(<MemoryRouter><App /></MemoryRouter>);
    const pageTitle = getByText('ArtisTry')
    const usernameInput = getByPlaceholderText('username')
    const passwordInput = getByPlaceholderText('password')
    const loginBtn = getByRole('button')
    expect(pageTitle).toBeInTheDocument()
    expect(usernameInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(loginBtn).toBeInTheDocument()
  })

  it('should display loading fetch message', () => {
    const { getByText } = render(<MemoryRouter><App /></MemoryRouter>)
    const loadingMessage = getByText('Loading Collection...')
    expect(loadingMessage).toBeInTheDocument()
  })

  it('should display all paintings once fetch is resolved', async () => {
    const { getAllByRole } = render(<MemoryRouter><App /></MemoryRouter>)
    const images = await waitFor(() => getAllByRole('img'))
    expect(images).toHaveLength(3)
  })

  afterAll(() => {
    console.error = originalError
  })
})
