import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import {CardStyled} from './CardStyled'

export default function Card({path, ticker, name, isHome}) {
    const renderedName = name === '' ? ticker : name;  
    const url = isHome ? path : `${path}/${ticker}`;
    
    const location = useLocation();
    const testpath = location.pathname;

    const dynamicClassName = testpath === '/'? 
      "col-lg-6 col-sm-6 col-xs-12 p-2":
      "col-lg-6 col-sm-4 col-xs-12 p-2"
    return (
        <div className={dynamicClassName}>
            <Link to={url}>
                <CardStyled className="card p-2 text-center">
                    {path === "/markets" ? <p>{ticker}</p> : <p>{renderedName}</p>}
                </CardStyled> 
            </Link>
        </div>
    )
}
