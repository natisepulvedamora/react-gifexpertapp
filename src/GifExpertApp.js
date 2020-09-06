import React,{useState} from 'react';
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';
//rafc
const GifExpertApp = () => {
    const categoriasInicial=['One Punch'];
    const [categorias, setCategorias] = useState(categoriasInicial);
    return (
    <>
        <h2>GifExpertApp</h2>
        {/*Agrega categorias al array categorias
         contiene el input text
        */}
        <AddCategory 
            setCategorias={setCategorias}
            />

        <hr />
        {/* Imprime el contenedor de gifs de cada categoría*/}
            {categorias.map((cat)=>
                <GifGrid 
                    key={cat}
                    categoria={cat}
                />    
            )
            }
    </>
    );
}
 
export default GifExpertApp;