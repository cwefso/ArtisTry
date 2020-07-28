import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import usePaintings from '../Hooks/usePaintings'
import Gallery from '../Gallery/Gallery'
// import '../ArtistGallery/ArtistGallery.css'

function ArtistGallery(props) {
  let url
  const { artistName } = props.info
  if (artistName !== undefined) {
    if (artistName.includes('.')) {
      url = artistName.replace(/\s/g, '').replace(/\./g, '-').toLowerCase()
    } else {
      url = artistName.replace(/\s+/g, '-').replace(/\./g, '-').toLowerCase()
    }
  }
  const { paintings } = usePaintings(`http://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${url}&json=2`)

  return (
    <section className="painter-page">
      <section className="painter-nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1 className="painting-page-title" data-testid="ArtisTry">ArtisTry</h1>
        </Link>
        <h1 className="artist-page-name" data-testid={artistName}>{artistName}</h1>
        <Link to="/user-gallery" style={{ textDecoration: 'none' }}>
          <button type="button" className="my-gallery-btn" onClick={props.getUserFavorites}>My Gallery</button>
        </Link>
      </section>
      <section aria-label="gallery">
        <Gallery paintings={paintings} setSelected={props.setSelected} />
      </section>
    </section>
  )
}

export default ArtistGallery

ArtistGallery.propTypes = {
  artistName: PropTypes.string,
  favorites: PropTypes.object || PropTypes.array,
  history: PropTypes.object,
  info: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  setSelected: PropTypes.func
}
