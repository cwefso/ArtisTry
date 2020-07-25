import React, { useState, useEffect } from 'react';
import './App.css';
import Gallery from '../Gallery/Gallery';
import PaintingInfo from '../PaintingInfo/PaintingInfo';
import PainterInfo from '../PainterInfo/PainterInfo';
import RandomArt from '../RandomArt/RandomArt'
import { Link, Switch, Route, withRouter } from 'react-router-dom';
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
        <section className="nav-btn-box">
          <Link to="/random-art" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className="random-art-btn">Explore</button>
            {/* <p className="random-art-btn">Explore</p> */}
          </Link>
          <Link to="/my-gallery" style={{ textDecoration: 'none', color: 'inherit' }}>
            <button className="my-gallery-btn">My Gallery</button>
          </Link>
        </section>
      </section>
      <section className="gallery">
        {/* <section className="background"></section> */}
        <Gallery paintings={paintings} setSelected={setSelected} />
      </section>
    </main>
  )
  
  return (
    <Switch>
      <Route path="/artists-gallery" render={(routeProps) => {
        const { params } = routeProps.match;
        const { id } = params;
        return <PainterInfo info={selected} painterId={id} {...routeProps} artistName= {selected.artistName} setSelected={setSelected}/>
      }} />

      <Route path="/random-art" render={(routeProps) => {
        const { params } = routeProps.match;
        const { id } = params;
        return <RandomArt info={selected} {...routeProps} setSelected={setSelected}/>
      }} />

      <Route exact path='/:paintingTitle'   render={(routeProps) => {
        const { params } = routeProps.match;
        const { id } = params;
        return <PaintingInfo paintingInfo={selected} setSelected={setSelected} paintingId={id} {...routeProps}/>
        
      }} />

      <Route exact path='/' render={() => mainPage} />
    </Switch> 
  )
}

export default withRouter(App);
