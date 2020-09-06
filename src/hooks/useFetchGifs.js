import {useState,useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';
//hooks son funciones. se nombran con use
export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data:[],
        loading:true
    });
 //useEffect me sirve para no volver a hacer la petición cada vez que hago un cambio
    //en un componente, ejecuta código según cierta condición
    useEffect(()=>{
        getGifs(categoria)
        .then(img=>
            setState({
                data:img,
                loading:false
            })
            );

    },[categoria]);

    return state; //data:[],loading:true
}
