import React, { useState, useEffect } from 'react'
import GifGridItem from "./GifGridItem"

const GifGrid = ( { category } ) => {
    const [ images, setImages ] = useState( [] )
    useEffect( () => {
        getGifs()
    }, [] )

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=tlok6LDRVON8OXZ05mg6csK12uj83aFA&q=Rick+and+Morty&limit=10'
        const res = await fetch( url )
        const { data } = await res.json()

        const gifs = data.map( img => {
            return {
                id : img.id,
                title : img.title,
                url : img.images?.downsized.url
            }
        } )

        console.log( gifs )
        setImages( gifs )
    }

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( image => (
                        <GifGridItem
                            key={ image.id }
                            { ...image }
                        />
                    ) )
                }
            </div>
        </>
    )
}

export default GifGrid