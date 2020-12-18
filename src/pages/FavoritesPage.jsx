import React from 'react'
import Card from '../components/Card';

export default function FavoritesPage(props) {
    let storedFavorites = null;
    if (localStorage.getItem("favorites")) {
        const stored = JSON.parse(localStorage.getItem("favorites"))
        Object.keys(stored).length > 0 && (storedFavorites = stored)
    }
    return (
        <>
            <h3>Favorites</h3>
            {!storedFavorites && <p>No favorites stored</p>}
            {storedFavorites && (<div className="row">
                {Object.entries(storedFavorites).map((item, index) => {
                    return <Card key={index} path={item[0]} ticker={item[1].ticker} name={item[1].name} isHome/>
                })}
            </div>)}
        </>
    )
}
