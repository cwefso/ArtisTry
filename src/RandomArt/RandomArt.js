import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import usePaintings from '../Hooks/usePaintings';
import Gallery from '../Gallery/Gallery';
import randomTerms from './randomTerms';
import PropTypes from 'prop-types';

function RandomArt(props) {
  const [reload, setReload] = useState(false)
  const getRandomWord = () => randomTerms[Math.floor(Math.random() * randomTerms.length)]
  const {paintings, setUrl, loading, error} =  usePaintings(`http://www.wikiart.org/en/search/${getRandomWord()}/1?json=2`)
  const handleClick = () => {
    window.location.reload(false)
    // if(!loading){
    //   setUrl(`http://www.wikiart.org/en/search/${getRandomWord()}/1?json=2`)
    // }
  }

  return (
    <section className="painter-page">
      <section className="painter-nav">
        <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <label htmlFor="home button"></label>
          <h1 aria-label="home button" className="painting-page-title">
            ArtisTry
          </h1>
        </Link>
        <section>
          <button 
            className={`random-button ${loading && "random-button--loading"}`}
            style={{background: loading ? "#333333" : "#fff"}} 
            onClick={handleClick}
          >
            Explore
          </button>
          <Link to={"/user-gallery"} style={{ textDecoration: 'none' }}>
            <button className="my-gallery-btn" onClick={props.getUserFavorites}>My Gallery</button>
          </Link>
        </section>
      </section>
      <section aria-label="gallery">
        {!error && <Gallery paintings={paintings} setSelected={props.setSelected}/>}
        {error && <p>WHAT DID YOU DO!?</p>}
      </section>
    </section>
  )
}

export default RandomArt;

RandomArt.propTypes = {
  info: PropTypes.object,
  setSelected: PropTypes.func,
  getUserFavorites: PropTypes.func
}
