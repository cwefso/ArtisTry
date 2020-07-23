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
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState({})
  const paintings = usePaintings('http://www.wikiart.org/en/App/Painting/MostViewedPaintings');
// form handlers
  const handleChange = (e) => {
    const {name, value} = e.target
    if(name === "username"){
      setUsername(value)
    } else {
      setPassword(value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    resetForm();
  }

  const resetForm = () => {
    setPassword('')
    setUsername('')
  }

// render
 const mainPage = (
    <main>
      <section className="header">
        <h1 className="page-title">ArtisTry</h1>
        {!loggedIn && <form className="login">
          <section className="inputs-container">
            <input 
              type="text"
              name="username"
              value={username}
              placeholder="username"
              onChange={handleChange}
            />
            <input 
              type="text"
              name="password"
              value={password}
              placeholder="password"
              onChange={handleChange}
            />
          </section>
          <button 
            onClick={handleSubmit}
            className="login-btn"
          >
            Log In
          </button>
          </form> }
        {loggedIn && 
        <button
        className="my-gallery-btn"
        >
          My Gallery
        </button>}
      </section>
      <section className="gallery">
        <Gallery paintings={paintings} setSelected={setSelected} />
      </section>
    </main>
 )
  return (
  <>
    <Route exact path='/' render={() => mainPage} />
    <Route path='/:paintingTitle' render={() => {
      // removed destructured match from render param
      // const {id} = match.params
      return <PaintingInfo paintingInfo={selected} />
    
    }} />
    <Route path='/:painterName' render={() => {
      return <PainterInfo />
    }} />
  </> )
}

export default withRouter(App);
