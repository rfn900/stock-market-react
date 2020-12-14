import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

export default function InstrumentDetailsPage(props) {

    const [instrumentDetails, setInstrumentDetails] = useState(null)

    useEffect(() => {
        setInstrumentDetails(null)
        const path = props.match.url;
        console.log("path: " + path);
        const url = `https://market-data-collector.firebaseio.com/market-collector${path}.json`
        console.log('url: ' + url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInstrumentDetails(data))
    }, [props.match.url]);

    return (
        <div>
            <Breadcrumbs />
            {!instrumentDetails && <p>Loading...</p>}
            {/*{instrumentDetails &&
        <p>{JSON.stringify(instrumentDetails)}</p>
        } */}
            {instrumentDetails && (
                <>
                    <div>Name: {instrumentDetails.name}</div>
                    <div>Price: {instrumentDetails.price}</div>
                    {/*<h4>Price  Dynamics</h4>
                    <div>Today: {instrumentDetails.today}</div>
                    <div>For one week: {instrumentDetails.w1}</div>
                    <div>For 3 years: {instrumentDetails.y3}</div>
                    <div>For 5 years: {instrumentDetails.y5}</div>
                    <div>Year to date: {instrumentDetails.ytd}</div> */}
                    <h5 className="mt-5 text-center">Price  Dynamics</h5>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                <th>Today</th>
                                <td>{instrumentDetails.today}</td>
                            </tr>
                            <tr>
                                <th>For one week</th>
                                <td>{instrumentDetails.w1}</td>
                            </tr>
                            <tr>
                                <th>For 3 years</th>
                                <td>{instrumentDetails.y3}</td>
                            </tr>
                            <tr>
                                <th>For 5 years</th>
                                <td>{instrumentDetails.y5}</td>
                            </tr>
                            <tr>
                                <th>Year to date</th>
                                <td>{instrumentDetails.ytd}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}
