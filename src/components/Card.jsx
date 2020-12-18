import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import {CardStyled} from './CardStyled'

export default function Card({path, ticker, name, isMarketsHome}) {
    const renderedName = name === '' ? ticker : name; //If the name property is empty, render the ticker instead 
    const url = isMarketsHome ? path : `${path}/${ticker}`;//For the Markets card the url must contain the ticker prop
    
    const location = useLocation();
    const testPath = location.pathname;//This allow us to check if we are on the MainPage

    //Render different bootstrap style when we are on MainPage
    const dynamicClassName = testPath === '/'? "col-sm-6": "col-md-4"
    return (
        <div className={`p-2 ${dynamicClassName}`}>
            <Link to={url}>
                <CardStyled className="card p-2 text-center">
                    {/* This prevents an empty Card to be rendered on MainPage */}
                    {path === "/markets" ? <p>{ticker}</p> : <p>{renderedName}</p>}
                </CardStyled> 
            </Link>
        </div>
    )
}
