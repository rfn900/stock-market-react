import React from 'react'
import { Link } from 'react-router-dom'

import {HeaderStyled} from './HeaderStyled'
import Search from './Search'

export default function Header() {

    // Variable "links" is a list of section names on our site. Each of the elements of this list is transformed into a <li> element with a link to corresponding section.

    const links = [
        "",
        "Indexes",
        "Markets",
        "Currencies",
        "Crypto",
        "",
        "Favorites"
    ]

    return (
        <HeaderStyled className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <h1>Stock Market</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>   
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav ml-auto">
                    <Search />
                    
                    {links.map( (item, index) => {
                        return (
                        <li key={index} className="nav-item ">
                            <Link className="nav-link" to={`/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                        )

                    })}
                </ul>
            </div>
        </HeaderStyled>
    )
}
