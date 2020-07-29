import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import usePaintings from '../Hooks/usePaintings'
import Gallery from '../Gallery/Gallery'
import randomTerms from './randomTerms'

function RandomArt(props) {
  const shuffle = require('shuffle-array')
  let getRandomWord = () => shuffle.pick(randomTerms)
  const { paintings, loading, error } = usePaintings(`http://www.wikiart.org/en/search/${getRandomWord()}/1?json=2`)


  return (
    <section className="painter-page">
      <section className="painter-nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <label htmlFor="home button" />
          <h1 aria-label="home button" className="painting-page-title">
            ArtisTry
          </h1>
        </Link>
        <section>
          <Link to="/user-gallery" style={{ textDecoration: 'none' }}>
            <button className="my-gallery-btn" onClick={props.getUserFavorites}>My Gallery</button>
          </Link>
        </section>
      </section>
      <section aria-label="gallery">
        {!error && <Gallery paintings={paintings} setSelected={props.setSelected} />}
        {error && <p>WHAT DID YOU DO!?</p>}
      </section>
    </section>
  )
}

export default RandomArt

RandomArt.propTypes = {
  info: PropTypes.object,
  setSelected: PropTypes.func,
  getUserFavorites: PropTypes.func
}
