import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
    const location = useLocation() //store current location
    const [name, setName] = useState(null) //store current instrument name to be displayed
    const pathArray = location.pathname.split("/") //Read from current url and save elements into an array
    
    const lastElement = pathArray.pop()//Take away the last element so it won't be rendered as a link
    
    //Fetch API data
    useEffect(()=>{
        const path = location.pathname
        const url = `https://market-data-collector.firebaseio.com/market-collector${path}/.json`
        fetch(url)
        .then(res => res.json())
        .then(data => {
           const renderedName = data.name === '' ? data.ticker : data.name; //if name is empty, use the ticker prop
           //Set name state variable
           setName(renderedName);
        })
    },[])

    return (
        <div className="my-4">
            {pathArray.map((element,index,arr) => {
                //Construct the full path to be used as the link url on
                //our breadcrumb elements
                const fullPath = pathArray.slice(1,index+1).join("/")

                return (
                <>
                    {/* Render a sequence of spans linking to their specific url */}
                    <span key={index}>/
                        {index === 0 ? 
                        <Link to="/">home</Link>:
                        <Link to={`/${fullPath}`}>{element}</Link>}
                    </span>
                </>
                )
            }
            )}
            {/* The last element is not a link */}
            <span>/{pathArray.length === 3? name : lastElement}</span>
        </div>
    )
}
