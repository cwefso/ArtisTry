import React from 'react';
import './Gallery.css';
import {Link} from 'react-router-dom';
import Painting from '../Painting/Painting';

function Gallery (props) {

  const shuffle = require('shuffle-array')

  const setSelectedPainting = (painting) => {
    props.setSelected(painting)
  }

  // const shuffleAndSlice = () => {
    // return shuffle(props.paintings)
    // return shuffled.slice(0, 100)
  // }

  const displayedPaintings = props.paintings.map(painting => {
    return (
      <Link
        tabIndex="-1"
        to={ painting.title ? `/${painting.title}` : `/${painting.contentId}` }
        aria-label='painting'
        data-testid={painting.contentId}
        key={painting.contentId}
        style={{textDecoration: 'none'}}
        onClick={() => setSelectedPainting(painting)}
      >
        <Painting painting={painting} key={painting.contentId} />
      </Link>
    )
  })

  return (
    <section>
      {props.paintings.length === 0 && 
          <section className="wrapper">
              <section className="background parallax bg1">
              </section>  
              <section className="displayed-paintings static">
                <h1 className='loading-paintings'>Loading Collection...</h1>
              </section>
          </section>}
      {props.paintings.length > 0 && 
        <section className="wrapper">
          <section className="background parallax bg1">
          </section>  
          <section className="displayed-paintings static">
            {displayedPaintings}
          </section>
        </section>}
    </section>
  )  
}

export default Gallery;
