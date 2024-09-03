  export const getPaintings = () => {
    return fetch('https://fe-cors-proxy.herokuapp.com', {
      headers: {
        "Target-URL": `http://www.wikiart.org/en/App/Painting/MostViewedPaintings`
      }
    })
      .then(res => res.json())
  }; 

  export const getFavorites = () => {
    return fetch('https://artistry-backend-psi.vercel.app/api/v1/favorites')
      .then(res => res.json())
      .then(data => data.favorites)
  }; 