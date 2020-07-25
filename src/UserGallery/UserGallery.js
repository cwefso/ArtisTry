import React from 'react'
import Painting from '../Painting/Painting'
import {Link} from 'react-router-dom';
import './UserGallery.css';

function UserGallery (props) {
    console.log(props);
  const {userFavs} = props.favorites
  console.log(userFavs);
  const setSelectedPainting = (painting) => {
    props.setSelected(painting)
  }

  const displayedPaintings = userFavs.map(painting => {
    return (
      <Link
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
      {userFavs.length === 0 && <h1>Loading Collection...</h1>}
      {userFavs.length > 0 && <section className="displayed-paintings">{displayedPaintings}</section>}
    </section>
  )  
}

export default UserGallery