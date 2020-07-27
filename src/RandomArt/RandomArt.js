import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import usePaintings from '../Hooks/usePaintings';
import Gallery from '../Gallery/Gallery';
import randomTerms from './randomTerms'

function RandomArt(props) {
  const shuffle = require('shuffle-array')
  let getRandomWord = () => shuffle.pick(randomTerms)
  const {paintings, loading, error} =  usePaintings(`http://www.wikiart.org/en/search/${getRandomWord()}/1?json=2`)

  const handleClick = () => {
    window.location.reload()
  }


  return (
    <section className="painter-page">
      <section className="painter-nav">
        <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
          <label htmlFor="home button"></label>
          <h1 
            aria-label="home button" className="painting-page-title">
            ArtisTry
          </h1>
        </Link>
        <button 
          className={`random-button ${loading && "random-button--loading"}`}
          style={{background: loading ? "#333333" : "#f2f2f2", color: loading ? "#f2f2f2" : "#333333"}} 
          onClick= {handleClick}
        >
          Explore
        </button>
        <Link to={"/user-gallery"} style={{ textDecoration: 'none' }}>
            <button className="my-gallery-btn">
              My Gallery
            </button>
        </Link>
      </section>
      <section aria-label="gallery">
          {!error && <Gallery paintings={paintings} setSelected={props.setSelected}/>}
          {error && <p>WHAT DID YOU DO!?</p>}
      </section>
    </section>
  )
}

export default RandomArt;
