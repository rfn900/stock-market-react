import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

export default function InstrumentListPage(props) {
    const [instrumentList, setInstrumentList] = useState(null)

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
            <Breadcrumbs/>
            {!instrumentList && <p>Loading...</p>}

            {instrumentList && Object.entries(instrumentList).map((item, index)=>{            
                return <p key={index}>{item[0]}</p>
            })}

        </div>
    )
}
