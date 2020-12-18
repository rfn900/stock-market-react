import React from 'react'
import { Link } from 'react-router-dom'

import {HeaderStyled} from './HeaderStyled'

export default function Header() {

    const links = [
        "Indexes",
        "Markets",
        "Currencies",
        "Crypto"
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
                    {links.map( (item, index) => {
                        return (
                        <li className="nav-item ">
                            <Link key={index} className="nav-link" to={`/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                        )

                    })}
                    
                    
                    <li className="nav-item active">
                        <Link className="nav-link" to="/indexes">Indexes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/markets">Markets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/currencies">Currencies</Link>
                    </li>
                    <li className="nav-item disabled">
                        <Link className="nav-link" to="/crypto">Crypto</Link>
                    </li>
                    <li className="ml-5"><p></p></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </div>
        </HeaderStyled>
    )
}
