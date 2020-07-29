import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PaintingInfo from './PaintingInfo'


describe('PaintingInfo', () => {
<<<<<<< HEAD
  let paintingInfoElement;
  let painting;
  let favorites;
  let testHistoryObject;
  
=======
  let paintingInfoElement
  let painting
  let testHistoryObject
>>>>>>> master
  beforeEach(() => {
    
    painting = {
<<<<<<< HEAD
      "title": "The River Thames with St. Paul's Cathedral on Lord Mayor's Day",
      "contentId": 250550,
      "artistContentId": 250406,
      "artistName": "Canaletto",
      "completitionYear": 1746,
      "yearAsString": "1746",
      "width": 1296,
      "image": "https://uploads6.wikiart.org/images/canaletto/the-river-thames-with-st-paul-s-cathedral-on-lord-mayor-s-day.jpg!Large.jpg",
      "height": 676,
      "name": 'image',
      "testId": 42
    }
    favorites = {userFavs: []}

    paintingInfoElement=(
      <MemoryRouter history={ testHistoryObject }>
        <PaintingInfo  selected={painting} paintingId={painting.title} favorites={favorites} paintingInfo={painting}  />
=======
      title: 'Mona Lisa',
      image: 'thing',
      completitionYear: 1519,
      artistName: 'Leonardo da Vinci',
      artistId: 1,
      artistUrl: 'url.Leo',
      height: 1,
      width: 1
    }
    paintingInfoElement = (
      <MemoryRouter history={testHistoryObject}>
        <PaintingInfo paintingInfo={painting} />
>>>>>>> master
      </MemoryRouter>
    )
  })

  it('should render the painting title, artist name, and year to the dom', () => {
    const { getByText } = render(paintingInfoElement)
    const title = getByText(`The River Thames with St. Paul's Cathedral on Lord Mayor's Day`)
    const artistName = getByText('Canaletto')
    const completionYear = getByText('Year Completed: 1746')
    
    expect(title).toBeInTheDocument()
    expect(artistName).toBeInTheDocument()
    expect(completionYear).toBeInTheDocument()
  })
})
