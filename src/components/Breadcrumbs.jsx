import React, {useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
    const location = useLocation()
    const [name, setName] = useState(null)
    const pathArray = location.pathname.split("/") //Read from current url and save elements into an array
    
    const lastElement = pathArray.pop()
    
    useEffect(()=>{
        const path = location.pathname
        const url = `https://market-data-collector.firebaseio.com/market-collector${path}/.json`
        fetch(url)
        .then(res => res.json())
        .then(data => {
           const renderedName = data.name === '' ? data.ticker : data.name; 
           setName(renderedName);
        })
    },[])

    return (
        <div className="my-4">
            {pathArray.map((element,index,arr) => {
                const fullPath = pathArray.slice(1,index+1).join("/")

                return (
                <>
                    <span key={index}>/
                        {index === 0 ? 
                        <Link to="/">home</Link>:
                        <Link to={`/${fullPath}`}>{element}</Link>}
                    </span>
                </>
                )
            }
            )}
            <span>/{pathArray.length === 3? name : lastElement}</span>
        </div>
    )
}
