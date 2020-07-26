import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import usePaintings from '../Hooks/usePaintings';
import Gallery from '../Gallery/Gallery';
import randomTerms from './randomTerms'

function RandomArt(props) {
  const [reload, setReload] = useState(false)
  const randomWord = randomTerms[Math.floor(Math.random() * randomTerms.length)]
  const newWord = randomTerms[Math.floor(Math.random() * randomTerms.length)]
  let randomSearch = usePaintings(`http://www.wikiart.org/en/search/${randomWord}/1?json=2`)
  const newSearch = usePaintings(`http://www.wikiart.org/en/search/${newWord}/1?json=2`)

  if(reload){
    randomSearch = newSearch
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
          className="random-art-btn" 
          onClick={() => {
            reload ? setReload(false) : setReload(true)
          }
        }>
          Explore
        </button>
      </section>
      <section aria-label="gallery">
          <Gallery paintings={randomSearch} setSelected={props.setSelected}/>
      </section>
    </section>
  )
}

export default RandomArt;
