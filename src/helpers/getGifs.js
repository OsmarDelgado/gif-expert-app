const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=tlok6LDRVON8OXZ05mg6csK12uj83aFA&q=${ encodeURI( category ) }&limit=10`
    const res = await fetch( url )
    const { data } = await res.json()

    const gifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.downsized.url
        }
    } )

    return gifs
}

export default getGifs