import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

export default function InstrumentDetailPage(props) {
    const [instrument, setInstrument] = useState(null)

    const hiddenInfo = ["source", "link", "name", "omni_ticker", "ticker", "values"]

    const details = {
        "market": "Market",
        "mtd": "Month to date",
        "price": "Price",
        "today": "Today",
        "w1": "One week",
        "y3": "Three years",
        "y5": "Five years",
        "ytd": "Year to date"
    }

    useEffect( () => {
        const path = props.match.url;
        const url = `https://market-data-collector.firebaseio.com/market-collector${path}.json`
        fetch(url)
        .then(res => res.json())
        .then(data => setInstrument(data))
    }, [])

    return (
        <>
            <Breadcrumbs />
            {!instrument && <p>Loading...</p>}

            {instrument && (
                <div>
                    <h3>{instrument.name}</h3>
                    <table className="table table-hover">
                        <tbody>
                            {Object.entries(instrument).map((entry, index) => {
                                if (!hiddenInfo.includes(entry[0])) {
                                    return (
                                        <tr key={index}>
                                            <th>{details[entry[0]]}:</th>
                                            <td>{entry[1]}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}
