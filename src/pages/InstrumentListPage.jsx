import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import InstrumentListItem from '../components/InstrumentListItem'

export default function InstrumentListPage(props) {
    const [instrumentList, setInstrumentList] = useState(null)

    useEffect(()=>{
        setInstrumentList(null)
        const path = props.match.url; // changed to convert ex "/markets/:id" to "/markets/stockholm"
        console.log(path);
        const url = `https://market-data-collector.firebaseio.com/market-collector${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setInstrumentList(data))
    },[props.match.url])

    return (
        <div>
            <Breadcrumbs/>
            {!instrumentList && <p>Loading...</p>}

            {instrumentList && Object.entries(instrumentList).map((item, index)=>{     
                return <InstrumentListItem key={index} path={props.match.url} name={item[0]}/>
            })}

        </div>
    )
}
