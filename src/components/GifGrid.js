import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
export const GifGrid = ({categoria}) => {

    //recibe los datos de la api 
    const {data:images,loading}=useFetchGifs(categoria);
    
    return (
        <>
            <h3 className="animate__animated animate__bounce">{categoria}</h3>
            {loading?<p className="animate__animated animate__shakeX">Cargando...</p>:
            <div className="card-grid">
                {/* Imprime cada gif de la categoría*/}
                  {images.map(img=>
                    <GifGridItem 
                    key={img.id} 
                    {...img}
                    />
                    )
                    }    
                </div>}
            
        </>
    )
}

