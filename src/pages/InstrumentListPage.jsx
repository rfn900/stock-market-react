import React, { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'

import ScrollUp from '../components/ScrollUp'
import Breadcrumbs from '../components/Breadcrumbs'
import Card from '../components/Card'

export default function InstrumentListPage(props) {
    const [instrumentList, setInstrumentList] = useState(null)
    const [redirect, setRedirect] = useState(null);
    const scrollRef = useRef(null);

    useEffect(()=>{ 
        setInstrumentList(null)
        setRedirect(null)
        const path = props.match.url; 
        const url = `https://market-data-collector.firebaseio.com/market-collector${path}.json`
        fetch(url)   // Fetch from API.  
        .then(res => res.json())
        .then(data => {
            checkLength(data)
            setInstrumentList(data)
        })
    },[props.match.url])
    
    function checkLength(data) {
        //sets redirect path to ex: "sek" or "usd" if only one entry in instrumentList
        const numOfEntries = Object.entries(data).length;
        if (numOfEntries === 1) {
            setRedirect(`${props.match.url}/${Object.keys(data)[0]}`)
        }
    }
    
    function handleOnClick(){
        console.log(scrollRef)
        scrollRef.current.scrollIntoView(); 
    }

    return (
        <div ref={scrollRef}>
            
            {instrumentList && <Breadcrumbs/>}
            
            {redirect && <Redirect to={redirect} />}
            
            <div className="row">
                {!instrumentList && <p>Loading...</p>} {/*Render a loading text if no contents availble*/}
                {instrumentList && Object.entries(instrumentList).map((item, index)=>{
                    return <Card key={index} path={props.match.url} ticker={item[0]} name={item[1].name}/>
                })}
                {/* Otherwise, render a "card" */}
            </div>
            <ScrollUp onClick={handleOnClick}/>
        </div>
    )
}
