import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function IndexSePage2List() {
    const [indexObject, setIndexObject] = useState({})
    let { nameOfIndexes } = useParams();



    function fetchInstrumentList(){
        fetch("https://market-data-collector.firebaseio.com/market-collector/.json")
        .then( response => response.json() )
        .then( data => setIndexObject(data["indexes"][nameOfIndexes]) )

    }

    useEffect(()=> {
        fetchInstrumentList()
    }, [])
    

    console.log(indexObject)
    
    let indexesList = Object.keys(indexObject)

    return (
        
    <div>
        <h1>Indexes Se Page 2 List</h1>
      <div className="container">
        <div className="row row-cols-3">
            {indexesList.map( indexesListItem => {
                return <div className="card col"><p>< Link to={"/indexes/" + nameOfIndexes + "/" + indexesListItem}>{indexesListItem}</Link></p></div>
                })}
        </div>
     </div>
   </div>
    )
}
