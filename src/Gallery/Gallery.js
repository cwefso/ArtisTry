import React from 'react';
import {Link} from 'react-router-dom';
import './Gallery.css';
import Painting from '../Painting/Painting';

function Gallery (props) {
  console.log(props);
  const setSelectedPainting = (painting) => {
    props.setSelected(painting)
  }

  const displayedPaintings = props.paintings.map(painting => {

    return (
      <Link
        to={`/${painting.url}`}
        aria-label='painting'
        key={painting.id}
        style={{textDecoration: 'none'}}
        onClick={() => setSelectedPainting(painting)}
      >
        <Painting painting={painting} key={painting.id} />
      </Link>
    )
  })

  return(
  <div>
    {props.paintings.length === 0 && <h1>Add Paintings</h1>}
    {props.paintings.length > 0 && <section className="displayed-paintings">{displayedPaintings}</section>}
  </div>
  
  )  

}

export default Gallery;

