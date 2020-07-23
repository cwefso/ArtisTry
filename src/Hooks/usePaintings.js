import {useState, useEffect} from 'react';

const usePaintings = (url) => {
  const [paintings, setPaintings] = useState([]);


// useEffect 

  useEffect(() => {
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