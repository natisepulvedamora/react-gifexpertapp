import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    //recibe los datos del gif y lo imprime
    return (
        <>
            <div className="card animate__animated animate__bounce">
               <img src={url} alt='' />
               <p>{title}</p>
            </div>
        </>
    )
}
