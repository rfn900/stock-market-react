import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import Card from '../components/Card';

export default function FavoritesPage(props) {

    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    return (
        <>
            {/* <Breadcrumbs /> */}
            <h3>Favorites</h3>
            <div className="row">
                {Object.entries(storedFavorites).map((item, index) => {
                    return <Card key={index} path={item[0]} ticker={item[1].ticker} name={item[1].name} isHome/>
                })}
            </div>
        </>
    )
}
