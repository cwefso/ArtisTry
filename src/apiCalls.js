  export const getPaintings = () => {
    return fetch('https://fe-cors-proxy.herokuapp.com', {
      headers: {
        "Target-URL": `http://www.wikiart.org/en/App/Painting/MostViewedPaintings`
      }
    })
      .then(res => res.json())
  }; 

  export const getFavorites = () => {
    return fetch('http://localhost:3001/api/v1/favorites')
      .then(res => res.json())
      .then(data => data.favorites)
  }; 