import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Link to="/">
                <h1>Stock Market</h1>
            </Link>
            <ul>
                <Link to="/indexes">
                <li>Indexes</li>
                </Link>
                <Link to="/markets">
                <li>Markets</li>
                </Link>
                <Link to="/currencies">
                <li>Currencies</li>
                </Link>
                <Link to="/crypto">
                <li>Crypto</li>
                </Link>
            </ul>
        </div>
    )
}
