import React from 'react'
import '../PaintingInfo/PaintingInfo.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Gallery from '../Gallery/Gallery'
// import Painting from '../Painting/Painting'

function UserGallery(props) {
  const { setSelected, favorites } = props
  const userFavs = favorites.userFavs || []

  return (
    <section>
      <section className="painter-nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1
            aria-label="home button"
            className="painting-page-title"
          >
            ArtisTry
          </h1>
        </Link>
        <h1 className="artist-name">My Gallery</h1>
        <Link to="/random-art" style={{ textDecoration: 'none', color: 'inherit' }}>
          <button type="button" className="random-button">Explore</button>
        </Link>
      </section>
      <section>
        {userFavs.length > 0 && <Gallery paintings={userFavs} setSelected={setSelected} /> }
        {userFavs.length === 0 && <h1 className="no-favorites-message">Add some paintings to your collection</h1>}
      </section>
    </section>
  )
}

export default UserGallery;

UserGallery.propTypes = {
  favorites: PropTypes.object || PropTypes.array,
  setSelected: PropTypes.func
}
