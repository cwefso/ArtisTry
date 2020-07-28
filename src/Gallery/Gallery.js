import React from 'react';
import './Gallery.css';
import {Link} from 'react-router-dom';
import Painting from '../Painting/Painting';
import PropTypes from 'prop-types';

function Gallery (props) {

  const setSelectedPainting = (painting) => {
    props.setSelected(painting)
  }

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
        <Painting painting={painting} key={painting.contentId} data-testid='painting' />
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
                <section className="loading-container">
                  <h1 className='loading-paintings'>Loading Collection</h1>
                  <section className="loading-roll"><section></section><section></section><section></section><section></section><section></section><section></section><section></section><section></section></section>
                </section>
              </section>
              <section className="loading-container">
                <section className="loading-roll"><section></section><section></section><section></section><section></section><section></section><section></section><section></section><section></section></section>
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

Gallery.propTypes = {
  paintings: PropTypes.array,
  setSelected: PropTypes.func
}
