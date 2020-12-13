import React, {useState, useEffect} from 'react'


export default function InstrumentListPage() {
    const [marketList, setMarketList] = useState({})



    function fetchInstrumentList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setMarketList(data["markets"]) )

    }

    useEffect(()=> {
        fetchInstrumentList()
    }, [])
    

    console.log(marketList)
    

    return (<h1>Kalle {JSON.stringify(marketList)}</h1>)
}
