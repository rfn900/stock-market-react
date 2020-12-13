import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLinkItem({to, text}) {
    return (
          <Link className="nav-link" to={to}>
            {text}
          </Link>
      )
    }