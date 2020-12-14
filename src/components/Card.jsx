import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardContainer = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CardBody = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 300px;
    background:#fafafa;
    border-radius: 10px;
    box-shadow: 0px 5px 50px 1px rgba(0,0,0,0.1)
`
const CardTitle = styled.h5`
    text-transform: capitalize;

`
const CardCTA = styled.div`
    margin: 20px 0 0 20px;
    width: 100%;
`

const CardHeader = styled.div`
    background: #32fa33;
    display: flex;
    justify-content: center;
    align-items:center;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 50%;
    text-transform: capitalize;

`


function Card({sourceName, description}) {
    return (
            <CardContainer className="col-md-6 col-sm-12">
                
                <CardBody>
                    <CardHeader>
                        <CardTitle>{sourceName}</CardTitle>
                    </CardHeader>
                    <CardCTA>
                        <Link className="btn btn-primary w-50" to={sourceName}>
                            {sourceName}
                        </Link>
                    </CardCTA>
                </CardBody>
            </CardContainer>
        
    )
}

export default Card
