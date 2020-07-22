import React from 'react';
import './Gallery.css';
import Painting from '../Painting/Painting';

function Gallery (props) {

  const shuffled = props.paintings.sort(() => Math.random() - 0.5)
  const sliced = shuffled.slice(0, 10)
  const displayedPaintings = sliced.map(painting => {
    return <Painting painting={painting} key={painting.id} />
  })

  return(
  <div>
    {props.paintings.length === 0 && <h1>Add Paintings</h1>}
    {props.paintings.length > 0 && <section className="displayed-paintings">{displayedPaintings}</section>}
  </div>
  
  )  

}

export default Gallery;

