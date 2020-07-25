import React from 'react'
import Painting from '../Painting/Painting'
import Gallery from '../Gallery/Gallery'
import {Link} from 'react-router-dom';
import './UserGallery.css';

function UserGallery (props) {
  const {setSelected} = props  
  const {userFavs} = props.favorites
  console.log(userFavs);
  
  return (
    <section>
        <section className="painter-nav">
          <Link to={"/"} style={{ textDecoration: 'none' }}>
          <button className="my-gallery-btn">
            Home
          </button>
        </Link>
          <h1 className="artist-name">Your Gallery</h1>
          {/* <img src={tagBtn} alt='save-btn' className='save-btn' /> */}
      </section>
      {userFavs.length === 0 && <h1>Add some paintings to your collection</h1>}
      {userFavs.length > 0 && <Gallery paintings={userFavs} setSelected={setSelected} /> }
    </section>
  )  
}

export default UserGallery