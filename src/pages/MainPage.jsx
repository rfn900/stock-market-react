import React from 'react'

import Card from '../components/Card'


export default function MainPage() {
    return (
        <>
            <div className="row">
                
                <Card path="/crypto" ticker="" name="Crypto"/>
                <Card path="/currencies" ticker="" name="Currencies"/>
                <Card path="/indexes" ticker="" name="Indexes"/>
                <Card path="/markets" ticker="Markets" name="Markets" isMarketsHome/>
                
            </div>
        </>
    )
}
