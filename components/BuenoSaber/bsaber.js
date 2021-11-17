import React, { useState, useEffect } from 'react';
import { getBSaber } from './callapi';

export default function BuenoSaber(){
    const [list, setList] = useState([]);
    let valor, rand;

    const Random = (min, max)=>{
        return Math.floor(Math.random()*(max - min)) + min;
    }   

    useEffect(()=>{
        let mounted=true;
        getBSaber()
        .then(items=>{
            if(mounted){
                valor = items.length+1;                  
                rand = Random(1, valor);                
                console.log(rand)
                setList(items.find(elem=>rand ===elem.id))
            }
        })
        return ()=> mounted=false;
    },[])
    
    return (
        <>
            <div>
                <h2>Bueno Saber</h2>
                <p>{list.descripcion}</p>      
            </div>
        </>          
    )  
}    