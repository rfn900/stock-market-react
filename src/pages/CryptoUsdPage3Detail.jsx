import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CryptoUsdPage3Detail() {
    const [cryptoObject, setCryptoObject] = useState({})
    let { nameOfCrypto, nameOfCrypto2 } = useParams();



    function fetchCryptoList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setCryptoObject(data["crypto"][nameOfCrypto][nameOfCrypto2]) )

    }

    useEffect(()=> {
        fetchCryptoList()
    }, [])
    

    console.log(cryptoObject)
    
    let cryptoList = Object.entries(cryptoObject)

    return (
        
    <div>
        <h1>Crypto Usd Page3 Detail</h1>
        <div>
        {cryptoList.map( col => {
            return <p>{col[0]} : {col[1]}</p>
        })}
    </div>
   </div>
    )
}

