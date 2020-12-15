import React from 'react'
import { Link } from 'react-router-dom'


export default function InstrumentListItem({path, name, text}) {

    return (
        <div className="card col-4 shadow-sm p-2 text-center">
            <Link to={`${path}/${name}`}>
                {path === "/markets" ? <p>{name}</p> : <p>{text}</p>}
            </Link>
        </div>
    )
}
