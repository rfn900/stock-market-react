import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.p`
    margin: 0;
    font-size: 1.2em;
    font-weight: 600;
    color: #76717a;
}
`
const Card = styled.div`
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 6px 10px rgba(172, 160, 187, 0.2);
    height: 10em;
    justify-content: center;

    &:hover {
        box-shadow: 2px 6px 20px rgba(172, 160, 187, 0.4);
    }
`

export default function InstrumentListItem({path, name, text, isHome}) {

    const url = isHome ? path : `${path}/${name}`;

    return (
        <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
            <Link to={url}>
                <Card className="card p-2 text-center">
                    {path === "/markets" ? <Title>{name}</Title> : <Title>{text}</Title>}
                </Card> 
            </Link>
        </div>
    )
}
