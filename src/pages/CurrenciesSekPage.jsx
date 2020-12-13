import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function CurrenciesSekPage() {
    const [currenciesObject, setCurrenciesObject] = useState({})



    function fetchCurrenciesList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setCurrenciesObject(data["currencies"]) )

    }

    useEffect(()=> {
        fetchCurrenciesList()
    }, [])
    

    console.log(currenciesObject)
    
    let currenciesList = Object.keys(currenciesObject)

    return (
        
    <div>
        <h1>Currencies Sek Page</h1>
      <div className="container">
        <div className="row row-cols-3">
            {currenciesList.map( currenciesListItem => {
                return <div className="card col"><p>< Link to={"/currencies/" + currenciesListItem}>{currenciesListItem}</Link></p></div>
                })}
        </div>
     </div>
   </div>
    )
}

