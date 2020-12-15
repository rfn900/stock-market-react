import React from 'react'
import { Link } from 'react-router-dom'


export default function InstrumentListItem({path, name, text}) {

    return (
        <div>
            <Link to={`${path}/${name}`}>
                {path === "/markets" ? <p>{name}</p> : <p>{text}</p>}
            </Link>
        </div>
    )
}
