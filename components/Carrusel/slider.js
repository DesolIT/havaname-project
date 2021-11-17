export function getCarrusel(){
    return fetch('http://localhost:1337/Sliders')
    .then(data=>data.json())
  }