import React from 'react'
import { Link } from 'react-router-dom'
import usePaintings from '../Hooks/usePaintings';
import Gallery from '../Gallery/Gallery';
import backBtn from '../assets/back-btn.png'
import tagBtn from '../assets/tagIcon.png'
import randomTerms from './randomTerms'

function RandomArt(props) {
  
  const randomWord = randomTerms[Math.floor(Math.random() * randomTerms.length)]

  const randomPaintings = usePaintings(`http://www.wikiart.org/en/search/${randomWord}/1?json=2`)

  return (
    <section className="painter-page">
       <section className="painter-nav">
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <img src={backBtn} alt='back-btn' className='back-btn' />
          </Link>
          <button className="random-art-btn" onClick={() => 
                                              {
                                                window.location.reload();
                                                return false;
                                              } }>
              More Art
          </button>
          <img src={tagBtn} alt='save-btn' className='save-btn' />
      </section>
      <section aria-label="gallery">
        <Gallery paintings={randomPaintings} setSelected={props.setSelected}/>  
      </section>
    </section>
  )
}

//<Gallery paintings={artistPaintings} />

export default RandomArt;