import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import {CardStyled} from './CardStyled'

export default function Card({path, ticker, name, isMarketsHome}) {
    const renderedName = name === '' ? ticker : name;  
    const url = isMarketsHome ? path : `${path}/${ticker}`;
    
    const location = useLocation();
    const testPath = location.pathname;

    const dynamicClassName = testPath === '/'? "col-sm-6": "col-md-4"
    return (
        <div className={`p-2 ${dynamicClassName}`}>
            <Link to={url}>
                <CardStyled className="card p-2 text-center">
                    {path === "/markets" ? <p>{ticker}</p> : <p>{renderedName}</p>}
                </CardStyled> 
            </Link>
        </div>
    )
}
