import React, { useState, useEffect } from 'react'

export default function InstrumentListPage(props) {
    const [instrumentList, setInstrumentList] = useState(null)

    useEffect(()=>{
        const path = props.match.path
        const url = `https://market-data-collector.firebaseio.com/market-collector${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setInstrumentList(data))

    },[instrumentList])
    return (
        <div>
            {!instrumentList && <p>Loading...</p> }

            {instrumentList && Object.entries(instrumentList).map((item, index)=>{
                console.log(item[1])
                return <p key={index}>{item[0]}</p>
            })}

        </div>
    )
}
