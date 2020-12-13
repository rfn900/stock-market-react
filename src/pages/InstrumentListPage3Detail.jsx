import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function InstrumentListPage3Detail() {
    const [marketObject, setMarketObject] = useState({})
    let { nameOfMarket, nameOfMarket2 } = useParams();



    function fetchInstrumentList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setMarketObject(data["markets"][nameOfMarket][nameOfMarket2]) )

    }

    useEffect(()=> {
        fetchInstrumentList()
    }, [])
    

    console.log(marketObject)
    
    let marketList = Object.entries(marketObject)

    return (
    <>
    <h1>Market List Page 3 Detail</h1>
    {/* <h2>{marketObject["name"]}</h2>
    <h3>{marketObject["price"]}</h3> */}

    <div>
        {marketList.map( col => {
            return <p>{col[0]} : {col[1]}</p>
        })}
    </div>
    </>
    )
}

