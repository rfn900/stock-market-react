import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs() {
    const pathArray = window.location.href.split("/") //Read from current url and save elements into an array
    //
    // If the current URL is: 
    // 'http://localhost:3000/subpath1/subpath2/subpath3/subpath4/subpath5'
    // Then our pathArray would be:
    // const pathArray = ['http:','','localhost:3000','subpath1','subpath2','subpath3','subpath4','subpath5']
    // 
    pathArray.splice(0,2) //Remove the first two elements of pathArray -> ['http','']

    return (

        <div className="my-4">
            {pathArray.map((element,index,arr) => {
                const fullPath = arr.slice(1,index+1).join("/")
             
                console.log(fullPath)
                return <span key={index}>/
                    {index === 0 ? 
                    <Link to="/">home</Link>:
                    <Link to={`/${fullPath}`}>{element}</Link>}
                </span>
            }
            )}
        </div>
    )
}
