// import axios from 'axios'

// const fetchFromCMS = async (path)=>{
//   const url = `http://localhost:1337/${path}`;
//   const res = await axios.get(url);
//   return res.data;
// }

// export default fetchFromCMS;

export function getServices(){
  return fetch('http://localhost:1337/Servicios')
  .then(data=>data.json())
}