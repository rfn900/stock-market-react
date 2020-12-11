import React, { useState, useEffect } from 'react'

export default function InstrumentListPage(props) {
    const [instrumentList, setInstrumentList] = useState([])

    console.log(instrumentList)
    useEffect(()=>{
        const path = props.match.path
        const url = `https://market-data-collector.firebaseio.com/market-collector${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setInstrumentList(data))
    },[props.match.path])

    return (
        <div>
            <h1>{props.match.path}</h1>
            {!instrumentList && <p>Loading...</p>}

            {instrumentList && Object.entries(instrumentList).map((item, index)=>{            
                return <p key={index}>{item[0]}</p>
            })}

        </div>
    )
}
