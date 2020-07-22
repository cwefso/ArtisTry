import React, {useState, useEffect} from 'react';
import Gallery from '../Gallery/Gallery.js';
import PaintingInfo from '../PaintingInfo/PaintingInfo.js';
import {getPaintings} from '../apiCalls';
import { Route, withRouter } from 'react-router-dom'
import './App.css';

function App() {

// state declarations and default value
  const [loggedIn, setLoggedIn] = useState(false);
  const [paintings, setPaintings] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selected, setSelected] = useState({})

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
 const mainPage = (
 <main>
      <section className="header">
        <h1>ArtisTry</h1>
        {!loggedIn && <form className="login">
          <input 
            type="text"
            name="username"
            value={username}
            placeholder-text="username"
            onChange= {handleChange}
          />
          <input 
            type="text"
            name="password"
            value={password}
            placeholder-text="password"
            onChange= {handleChange}
          />
          <button onClick= {handleSubmit}>Log In</button>
          </form> }
        {loggedIn && <button>My Gallery</button>}
      </section>
      <section className="gallery">
        <Gallery paintings={paintings} setSelected={setSelected} />
      </section>
    </main>
 )
  return (
  <>
    <Route exact path= '/' render={() => mainPage} />
    <Route exact path= '/:paintingTitle' render={({match}) => {
      const {id} = match.params
      return <PaintingInfo paintingInfo={selected} />
    
    }} />
  </> )
}

export default withRouter(App);
