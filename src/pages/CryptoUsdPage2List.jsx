import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CryptoUsdPage2List() {
    const [cryptoObject, setCryptoObject] = useState({})
    let { nameOfCrypto } = useParams();



    function fetchCryptoList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setCryptoObject(data["crypto"][nameOfCrypto]) )

    }

    useEffect(()=> {
        fetchCryptoList()
    }, [])
    

    console.log(cryptoObject)
    
    let cryptoList = Object.keys(cryptoObject)

    return (
        
    <div>
        <h1>Crypto Usd Page2 List</h1>
      <div className="container">
        <div className="row row-cols-3">
            {cryptoList.map( cryptoListItem => {
                return <div className="card col"><p>< Link to={"/crypto/" + nameOfCrypto + "/" +  cryptoListItem}>{cryptoListItem}</Link></p></div>
                })}
        </div>
     </div>
   </div>
    )
}


