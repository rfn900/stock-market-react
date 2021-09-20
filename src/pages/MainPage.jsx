import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const CenteredDiv = styled.div`
    width: 100%;
    margin:auto;
`

export default function MainPage() {
    return (
        <>
            <CenteredDiv className="row">
                
                <Card path="/crypto" ticker="" name="Crypto"/>
                <Card path="/currencies" ticker="" name="Currencies"/>
                <Card path="/indexes" ticker="" name="Indexes"/>
                <Card path="/markets" ticker="Markets" name="Markets" isHome/>
                
            </CenteredDiv>
        </>
    )
}
