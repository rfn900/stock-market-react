import React from 'react'
import Card from '../components/Card'

export default function SearchPage(props) {
    const matches = props.location.matches
    const length = matches ? Object.entries(matches).length : 0
    const showResults = length > 0 && length < 150
    return (
        <div className="row">
            {length > 150 && <p>There are too many matches. Please try to narrow down your search.</p>}
            {length < 1 && <p>Sorry, we couldn't find any matches to your search.</p>}
            {showResults && (
                    Object.entries(matches).map((item, index) => {
                    return <Card key={index} path={item[0]} ticker={item[1].ticker} name={item[1].name} isHome/>
                })
                )
            }
        </div>
    )
}
