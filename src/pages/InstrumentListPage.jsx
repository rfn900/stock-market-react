import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


export default function InstrumentListPage() {
    const [marketObject, setMarketObject] = useState({})



    function fetchInstrumentList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setMarketObject(data["markets"]) )

    }

    useEffect(()=> {
        fetchInstrumentList()
    }, [])
    

    console.log(marketObject)
    
    let marketList = Object.keys(marketObject)

    return (
        
    <div >
        <h1>Market List Page</h1>
      <div className="container">
        <div className="row row-cols-3">
            {marketList.map( marketListItem => {
                return <div className="col"><p>< Link to={"/markets/" + marketListItem}>{marketListItem}</Link></p></div>
                })}
        </div>
     </div>
   </div>
    )
}
