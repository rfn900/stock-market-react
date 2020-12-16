import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    box-shadow: 2px 6px 10px rgba(172, 160, 187, 0.2);
    margin-bottom: 2em;
    
`

export default function Header() {
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <h1>Stock Market</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
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
                </ul>
            </div>
        </Nav>
    )
}
