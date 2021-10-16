import axios from 'axios'

const fetchFromCMS = async (path) => {
    const url = `http://localhost:1337/${path}`;
    const res = await axios.get(url);
    return res.data;
  };
  export default fetchFromCMS;


//   import fetchFromCMS from '../lib/service';
// export default function Home({ portfolioItems }) {
//   console.log(portfolioItems);
// // ....
// }
// export async function getStaticProps() {
//   const portfolioItems = await fetchFromCMS('portfolios');
//   return {
//     props: { portfolioItems },
//     revalidate: 1,
//   };
// }