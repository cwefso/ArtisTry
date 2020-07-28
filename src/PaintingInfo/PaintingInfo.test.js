import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PaintingInfo from '../PaintingInfo/PaintingInfo'

describe('PaintingInfo', () => {
  let paintingInfoElement;
  let painting;
  let testHistoryObject;
  beforeEach(() => {
    painting = {
    title: 'Mona Lisa',
    image: 'thing',
    completitionYear: 1519,
    artistName: 'Leonardo da Vinci',
    artistId: 1,
    artistUrl: 'url.Leo',
    height: 1,
    width: 1
    }
    paintingInfoElement=(
      <MemoryRouter history={ testHistoryObject }>
        <PaintingInfo  paintingInfo={painting}  />
      </MemoryRouter>
    )
  })

  it('should render the painting title, artist name, and year to the dom', () => {
    const { getByText } = render(paintingInfoElement)
    const title = getByText('Mona Lisa')
    const artistName = getByText('Leonardo da Vinci')
    const completionYear = getByText('Year Completed: 1519')

    expect(title).toBeInTheDocument()
    expect(artistName).toBeInTheDocument()
    expect(completionYear).toBeInTheDocument()
  })
})
