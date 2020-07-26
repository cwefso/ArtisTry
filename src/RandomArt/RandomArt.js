import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import usePaintings from '../Hooks/usePaintings';
import Gallery from '../Gallery/Gallery';
import randomTerms from './randomTerms'

function RandomArt(props) {
  const [reload, setReload] = useState(false)
  // const [paintings, setPaintings] = useState([]);
  const randomWord = randomTerms[Math.floor(Math.random() * randomTerms.length)]
  const randomPaintings = usePaintings(`http://www.wikiart.org/en/search/${randomWord}/1?json=2`)
  // const newWord = randomTerms[Math.floor(Math.random() * randomTerms.length)]
  // const newRandomPaintings = usePaintings(`http://www.wikiart.org/en/search/${newWord}/1?json=2`)

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
            if(reload === true) {
              setReload(false)
            }
            if(reload === false){
              setReload(true)
            }      
          }
        }>
          Explore
        </button>
      </section>
      <section aria-label="gallery">
        {/* {reload === true ? ( */}
          <Gallery paintings={randomPaintings} setSelected={props.setSelected}/>
        {/* ) : ( */}
          {/* <Gallery paintings={newRandomPaintings} setSelected={props.setSelected}/>
        ) }   */}
      </section>
    </section>
  )
}

export default RandomArt;
