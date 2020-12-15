import React, {useState, useEffect} from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

export default function InstrumentDetailPage(props) {
    const [instrument, setInstrument] = useState(null)

    const hiddenInfo = ["link", "omni_ticker", "ticker"]

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
                    {Object.entries(instrument).map((entry, index) => {
                        if (!hiddenInfo.includes(entry[0])) {
                            return (
                                <p key={index}>{entry[0]}: {entry[1]}</p>
                            )
                        }
                    })}
                </div>
            )}
        </>
    )
}
