import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CurrenciesSekPage3Detail() {
    const [currenciesObject, setCurrenciesObject] = useState({})
    let { nameOfCurrencies, nameOfCurrencies2 } = useParams();


    function fetchCurrenciesList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setCurrenciesObject(data["currencies"][nameOfCurrencies][nameOfCurrencies2]) )

    }

    useEffect(()=> {
        fetchCurrenciesList()
    }, [])
    

    console.log(currenciesObject)
    
    let currenciesList = Object.entries(currenciesObject)

    return (
        
    <div>
        <h1>Currencies Sek Page3 Detail</h1>
        <div>
        {currenciesList.map( col => {
            return <p>{col[0]} : {col[1]}</p>
        })}
    </div>
   </div>
    )
}

