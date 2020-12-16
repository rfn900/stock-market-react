import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import InstrumentListItem from '../components/InstrumentListItem'

export default function InstrumentListPage(props) {
    const [instrumentList, setInstrumentList] = useState(null)
    const [redirect, setRedirect] = useState(null);

    useEffect(()=>{
        setRedirect(null)
        setInstrumentList(null)
        setRedirect(null)
        const path = props.match.url; // changed to convert ex "/markets/:id" to "/markets/stockholm"
        const url = `https://market-data-collector.firebaseio.com/market-collector${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => {
<<<<<<< HEAD
            // console.log(data, 'aqui');
=======
>>>>>>> e2d4aab78171c40a0baed52ebf67d897f409cca6
            checkLength(data)
            setInstrumentList(data)
        })
    },[props.match.url])
    
    function checkLength(data) {
        //sets redirect path to ex: "sek" if only one entry in instrumentList
        const numOfEntries = Object.entries(data).length;
        if (numOfEntries === 1) {
            setRedirect(`${props.match.url}/${Object.keys(data)[0]}`)
            console.log(`${props.match.url}/${Object.keys(data)[0]}`, redirect)

        }
    }
    
    return (
        <div>
<<<<<<< HEAD
            
            {instrumentList && <Breadcrumbs path={props.match} instrumentList={instrumentList}/>}
            {!instrumentList && <p>Loading...</p>}
            {/* {redirect && console.log(redirect)} */}
            {redirect && <Redirect to={redirect} />}
=======
            <Breadcrumbs/>
>>>>>>> e2d4aab78171c40a0baed52ebf67d897f409cca6

            <div className="row">
                {!instrumentList && <p>Loading...</p>}
                {redirect && <Redirect to={redirect} />}

                {instrumentList && Object.entries(instrumentList).map((item, index)=>{     
                    return <InstrumentListItem key={index} path={props.match.url} name={item[0]} text={item[1].name}/>
                })}
            </div>
        </div>
    )
}
