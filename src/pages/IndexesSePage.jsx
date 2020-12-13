import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


export default function IndexSesePage() {
    const [indexObject, setIndexObject] = useState({})



    function fetchInstrumentList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setIndexObject(data["indexes"]) )

    }

    useEffect(()=> {
        fetchInstrumentList()
    }, [])
    

    console.log(indexObject)
    
    let indexesList = Object.keys(indexObject)

    return (
        
    <div>
        <h1>Indexes Se Page</h1>
      <div className="container">
        <div className="row row-cols-3">
            {indexesList.map( indexesListItem => {
                return <div className="card col"><p>< Link to={"/indexes/" + indexesListItem}>{indexesListItem}</Link></p></div>
                })}
        </div>
     </div>
   </div>
    )
}
