import React, { useState, useEffect } from 'react';
import Gallery from '../Gallery/Gallery';
import PaintingInfo from '../PaintingInfo/PaintingInfo';
import PainterInfo from '../PainterInfo/PainterInfo';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import usePaintings from '../Hooks/usePaintings';
// import PropTypes from 'prop-types';

function App() {

// state declarations and default value
  const [selected, setSelected] = useState({})
  const paintings = usePaintings('http://www.wikiart.org/en/App/Painting/MostViewedPaintings');

// render
 const mainPage = (
    <main>
      <section className="header">
        <h1 className="page-title">ArtisTry</h1>
        <button className="my-gallery-btn">
          My Gallery
        </button>
      </section>
      <section className="gallery">
        <img src='../assets/offwhite wallpaper.jpg' alt="background-img" className="background-img" />
        <Gallery paintings={paintings} setSelected={setSelected} />
      </section>
    </main>
 )
  return (
  <>
    <Route exact path='/' render={() => mainPage} />
    <Route path='/:paintingTitle' render={() => {
      return <PaintingInfo paintingInfo={selected} />
    
    }} />
    <Route path='/:painterName' render={() => {
      return <PainterInfo />
    }} />
  </> )
}

export default withRouter(App);
