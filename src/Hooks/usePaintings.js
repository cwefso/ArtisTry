import {useState, useEffect} from 'react';

// http://www.wikiart.org/en/App/Painting/PaintingsByArtist?artistUrl=${artistURL}&json=2

const usePaintings = (url) => {
  console.log(url)
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    setPaintings([])
    const loadPaintings = () => {
      fetch('https://fe-cors-proxy.herokuapp.com', {
        headers: {
          "Target-URL": url
        }
      })
        .then(res => res.json())
        .then(result => setPaintings(result))
        .catch(err => console.log(err.message))
    }

    loadPaintings()
  }, [])
  
  return paintings
}

export default usePaintings;