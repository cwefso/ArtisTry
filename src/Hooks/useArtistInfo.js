import {useState, useEffect} from 'react';

const useArtistInfo = (artistId) => {
  const [artistInfo, setArtistInfo] = useState([]);


// useEffect 

  useEffect(() => {
    const loadArtistInfo = () => {
      fetch('https://fe-cors-proxy.herokuapp.com', {
        headers: {
          "Target-URL": `https://www.wikiart.org/en/api/2/PaintingsByArtist?id=[${artistId}]`
        }
      })
        .then(res => res.json())
        .then(result => console.log(result))
        // .then(result => setArtistInfo(result.data))
        .catch(err => console.log(err.message))
    }

    loadArtistInfo()
  }, [])
  
  return artistInfo
}

export default useArtistInfo;