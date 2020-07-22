import React, { useState, useEffect } from 'react';
import Gallery from '../Gallery/Gallery.js';
import { getPaintings } from '../apiCalls';
import './App.css';
// import PropTypes from 'prop-types';

function App() {

// state declarations and default value
  const [loggedIn, setLoggedIn] = useState(false);
  const [paintings, setPaintings] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

// fetch data

  const loadPaintings = () => {
    getPaintings()
    .then(result => setPaintings(result.data))
    .catch(err => console.log(err.message))
  }

// useEffect 

  useEffect(() => {
    loadPaintings()
  }, [])


// render
  return (
    <section>
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
        <Gallery paintings={paintings}/>
      </section>
    </section>
  );
}

export default App;
