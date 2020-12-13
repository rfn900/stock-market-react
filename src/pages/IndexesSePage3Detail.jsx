import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function IndexesSePage3Detail() {
    const [indexObject, setIndexObject] = useState({})
    let { nameOfIndexes, nameOfIndexes2 } = useParams();



    function fetchInstrumentList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setIndexObject(data["indexes"][nameOfIndexes][nameOfIndexes2]) )

    }

    useEffect(()=> {
        fetchInstrumentList()
    }, [])
    

    console.log(indexObject)
    
    let indexesList = Object.entries(indexObject)

    return (
        
    <div>
        <h1>Indexes Se Page 3 Detail</h1>
        <div>
        {indexesList.map( col => {
            return <p>{col[0]} : {col[1]}</p>
        })}
    </div>
   </div>
    )
}

