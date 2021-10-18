import React,{useState, useEffect} from 'react'
import { getServices } from '../../../components/CServicios/services';
import Layout from '../../../components/Layout'

const Leer = ({id})=>{
   
  const [list, setList] = useState([]);
  const apiUrl = 'http://localhost:1337'

  useEffect(()=>{
      let mounted=true;
      getServices()
      .then(items=>{
          if(mounted){
              setList(items)
          }
      })
      return ()=> mounted=false;
  },[])

return(
    <>
        {list.map((s)=>parseInt(s.id)===parseInt(id) 
        ?<Layout>

            <div>
                <h1>{s.titulo}</h1>
                <img src = {apiUrl + s.imagen.url} alt={s.titulo}/>
                <p>{s.descripcion}</p>
            </div>
        </Layout> 
            :console.log(''))}
    </>
)
}

export default Leer