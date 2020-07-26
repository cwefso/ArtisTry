import React, { useState, useEffect } from 'react';
import Gallery from '../Gallery/Gallery';
import PaintingInfo from '../PaintingInfo/PaintingInfo';
import PainterInfo from '../PainterInfo/PainterInfo';
import UserGallery from '../UserGallery/UserGallery'
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import './App.css';
import usePaintings from '../Hooks/usePaintings';
import { getFavorites } from '../apiCalls'
// import PropTypes from 'prop-types';

function App() {

// state declarations and default value
  const [selected, setSelected] = useState({})
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')
  const paintings = usePaintings('http://www.wikiart.org/en/App/Painting/MostViewedPaintings');
  

  const getUserFavorites = async () => {
    console.log('hi');
        const userFavs = await getFavorites()
        setFavorites({userFavs})
  }

  useEffect(() => {
    try {
      getUserFavorites()
      console.log(favorites);
    } catch (error) {
      setError(error)
    }
  }, [])
  
// render
 const mainPage = (
    <main>
      <section className="header">
        <h1 className="page-title">ArtisTry</h1>
        <Link to={"/user-gallery"} style={{ textDecoration: 'none' }}>
          <button className="my-gallery-btn" onClick={getUserFavorites}>
            My Gallery
          </button>
        </Link>
      </section>
      <section className="gallery">
        <img src='../assets/offwhite wallpaper.jpg' alt="background-img" className="background-img" />
        <Gallery paintings={paintings} setSelected={setSelected} />
      </section>
    </main>
 )
  return (
    <Switch>
      <Route path="/artists-gallery" render={(routeProps) => {
        const { params } = routeProps.match;
        const { id } = params;
        return <PainterInfo 
          info={selected} 
          painterId={id} {...routeProps} 
          artistName= {selected.artistName}
          favorites={favorites}
          />
      }} />

      <Route path="/user-gallery" render={(routeProps) => {
        const { params } = routeProps.match;
        const { id } = params;
        return (
          <section>
            <UserGallery 
              favorites={favorites}
              setSelected={setSelected}
            />
          </section>
          )
      }} />

      <Route exact path='/:paintingTitle'   render={(routeProps) => {
        const { params } = routeProps.match;
        const { id } = params;
        return <PaintingInfo 
                  paintingInfo={selected} 
                  setSelected={setSelected} 
                  paintingId={id} {...routeProps}
                  getUserFavorites={getUserFavorites}
                  favorites={favorites}
                  />
        
      }} />


      <Route exact path='/' render={() => mainPage} />
    </Switch> 
  )



}

export default withRouter(App);
