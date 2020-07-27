import {useState, useEffect} from 'react';

// http://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${artistURL}&json=2

const usePaintings = (initialUrl) => {

  const [paintings, setPaintings] = useState([]);
  const [url, setUrl] = useState(initialUrl)
  const [loading, setLoading] =  useState(true)
  const [error, setError] = useState(false)
  const shuffle = require('shuffle-array')


  useEffect(() => {
    setError(false)
    setLoading(true)
    const loadPaintings = () => {
      fetch('https://fe-cors-proxy.herokuapp.com', {
        headers: {
          "Target-URL": url
        }
      })
        .then(res => res.json())
        .then(result => {
          setPaintings(shuffle(result))
          setLoading(false)
        })
        .catch(err => {
          console.log(err.message)
          setLoading(false)
          setError(true)
        })
    }

    loadPaintings()
  }, [url])
  
  return {paintings, setUrl, loading, error}
}

export default usePaintings;