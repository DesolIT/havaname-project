import axios from 'axios'

const fetchFromStrapi = async (path)=>{
  const url = `http://localhost:1337/${path}`;
  const res = await axios.get(url);
  return res.data;
}

export default fetchFromStrapi;