  export const getPaintings = () => {
    return fetch('https://fe-cors-proxy.herokuapp.com', {
      headers: {
        "Target-URL": `http://www.wikiart.org/en/App/Painting/MostViewedPaintings`
      }
    })
      .then(res => res.json())
  }; 

  export const getFavorites = () => {
    return fetch('artistry-backend-o9f8uj2f0-charles-wefsos-projects.vercel.app/api/v1/favorites')
      .then(res => res.json())
      .then(data => data.favorites)
  }; 