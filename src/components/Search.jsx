import React, {useRef, useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import {SearchStyled} from './SearchStyled'

export default function Search() {
    const [object, setObject] = useState(null)
    const [matches, setMatches] = useState(null)
    const [redirect, setRedirect] = useState(false)

    const inputRef = useRef()
    
    // fetch api on mount
    useEffect( () => {
        const url = "https://market-data-collector.firebaseio.com/market-collector.json"
        fetch(url)
        .then(res => res.json())
        .then(data => setObject(data))
    }, [])

    // set redirect to true when matches are updated and true
    useEffect( () => {
        if (matches) {
            setRedirect(true)
        }
    }, [matches])

    // search for instruments matching user input
    function search(input) {
        setRedirect(false) //reset redirect
        let foundMatches = {}

        Object.entries(object).map(entry => {
            const path = `/${entry[0]}`                             // ex: /indexes
            
            Object.entries(entry[1]).map(entry => {
                const secondPath = `${path}/${entry[0]}`            // ex: /indexes/se
                
                Object.entries(entry[1]).map(entry => {
                    const thirdPath = `${secondPath}/${entry[0]}`   //ex: /indexes/se/AEX-EUR

                    const nameLower = entry[1].name.toLowerCase()
                    const inputLower = input.toLowerCase()

                    if (nameLower.includes(inputLower)) {
                        foundMatches[thirdPath] = entry[1]  //save key(path), value(instr.details)
                    }

                })
            })
        })
        setMatches(foundMatches) // sets matches -> fires redirect
    }

    // if enter button -> forward to handleOnClick
    function handleOnKeyUp(e) {
        if (e.key === "Enter") {
          handleOnClick()
        }
    }

    // click search button, run search function if input value is not empty
    function handleOnClick() {
        const input = inputRef.current
        if (input.value.trim() !== "") {
            search(input.value);
        }
        input.value = "";
    }
    return (
        <>
            {redirect && (<Redirect to={
                                {   
                                    pathname: "/search",
                                    matches: matches    // object containing all matches
                                }
                            } />)}
            <SearchStyled>
                <input ref={inputRef} type="text" placeholder="search instrument..." onKeyUp={handleOnKeyUp} />
                <button onClick={handleOnClick}><SearchIcon className="icon"/></button>
            </SearchStyled>
        </>
    )
}
