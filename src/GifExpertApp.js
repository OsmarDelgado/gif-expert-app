import React, { useState } from "react";

const GifExpertApp = () => {
    // const categories = [ 'One Punch', 'Samurai X', 'Dragon Ball' ]
    const [ categories, setCategories ] = useState( [ 'One Punch', 'Samurai X', 'Dragon Ball' ] )

    const handleAdd = () => {
        // setCategories( [ ...categories, 'HunterXHunter' ] )
        setCategories( cats => [ ...cats, 'HunterXHunter' ] )
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Add</button>

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    } ) 
                }
            </ol>

        </>
    )
}

export default GifExpertApp