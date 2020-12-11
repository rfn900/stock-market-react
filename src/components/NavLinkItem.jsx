import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinkItem() {
    return (
        <li className="nav-item">
          <Link className="nav-link" to={to}>
            {text}
          </Link>
        </li>
      )
    }