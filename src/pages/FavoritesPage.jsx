import React from 'react'
import Card from '../components/Card';


export default function FavoritesPage() {
    let storedFavorites = null;

    // check if favorites stored in local storage
    if (localStorage.getItem("favorites")) {
        const stored = JSON.parse(localStorage.getItem("favorites"))
        // check that stored object is not empty && save to storedFavorites
        Object.keys(stored).length > 0 && (storedFavorites = stored)
    }
    return (
        <>
            <h3>Favorites</h3>
            {!storedFavorites && <p>No favorites stored</p>}

            {/* Display card links of all entries in stored favorites */}
            {storedFavorites && (<div className="row">
                {Object.entries(storedFavorites).map((item, index) => {
                    return <Card key={index} path={item[0]} ticker={item[1].ticker} name={item[1].name} isHome/>
                })}
            </div>)}
        </>
    )
}
