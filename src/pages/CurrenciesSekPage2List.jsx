import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CurrenciesSekPage2List() {
    const [currenciesObject, setCurrenciesObject] = useState({})
    let { nameOfCurrencies } = useParams();


    function fetchCurrenciesList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setCurrenciesObject(data["currencies"][nameOfCurrencies]) )

    }

    useEffect(()=> {
        fetchCurrenciesList()
    }, [])
    

    console.log(currenciesObject)
    
    let currenciesList = Object.keys(currenciesObject)

    return (
        
    <div>
        <h1>Currencies Sek Page2 List</h1>
      <div className="container">
        <div className="row row-cols-3">
            {currenciesList.map( currenciesListItem => {
                return <div key={currenciesListItem} className="card col"><p>< Link to={"/currencies/" + nameOfCurrencies + "/" +  currenciesListItem}>{currenciesListItem}</Link></p></div>
                })}
        </div>
     </div>
   </div>
    )
}

