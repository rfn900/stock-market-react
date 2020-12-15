import React from 'react'
import { Link } from 'react-router-dom'


export default function InstrumentListItem({path, name, text}) {
    return (
        <div>
            <Link to={`${path}/${name}`}>
<<<<<<< HEAD
                {path === '/markets'? <p>{name}</p>:<p>{text}</p>}
=======
                {path === "/markets" ? <p>{name}</p> : <p>{text}</p>}
>>>>>>> 31ef6dc8bbbd29786b7a1b612d8445a462b04919
            </Link>
        </div>
    )
}
