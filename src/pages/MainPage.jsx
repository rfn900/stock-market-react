import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Card from '../components/Card'
const PageTitle = styled.h3`
    
`

const dataSrcs = [
    'crypto',
    'currencies',
    'indexes',
    'markets'
]

export default function MainPage() {
    return (
        <>
            <PageTitle>Main page</PageTitle>
        <div className="row">
            {dataSrcs.map((name,index)=>
               <Card key={index} sourceName={name}/>
            )}
        </div>
        </>

    )
}
