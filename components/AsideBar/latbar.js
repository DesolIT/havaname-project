export function getAside(){
    return fetch('http://localhost:1337/nosotros')
    .then(data=>data.json())
  }