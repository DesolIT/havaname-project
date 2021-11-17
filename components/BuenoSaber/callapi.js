export function getBSaber(){
    return fetch('http://localhost:1337/bueno-sabers')
    .then(data=>data.json())
  }