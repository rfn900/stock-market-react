import React from 'react'
import {Link} from 'react-router-dom'
import InstrumentListItem from '../components/InstrumentListItem'


export default function MainPage() {
    return (
        <>
            <div className="row">
                
                <InstrumentListItem path="/crypto" name="" text="Crypto"/>
                <InstrumentListItem path="/currencies" name="" text="Currencies"/>
                <InstrumentListItem path="/indexes" name="" text="Indexes"/>
                <InstrumentListItem path="/markets" name="Markets" text="Markets" isHome={true}/>
                
            </div>
        </>
    )
}
