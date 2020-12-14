import React from 'react'
import { Link } from 'react-router-dom'


export default function InstrumentListItem({path, name}) {

    //check if 2 / in url path (meaning next page is detail page)

    // function isLinkToDetails() {
    //     const slashList = path.match(/\//g);
    //     if (slashList === null) {
    //         return false;
    //     }
    //     return slashList.length > 1;
    //     // const result = (path.match(/\//g) || []).length;
    //     // return result >= 2;
    // }
    return (
        <div>
        <Link to={`${path}/${name}`}>
          <p>{name}</p>
        </Link>
        {/*
            {!isLinkToDetails() && (
                <Link to={`${path}/${name}`}>
                    <p>{name}</p>
                </Link>
            )}
            {isLinkToDetails() && (
                <Link to={`${path}/${name}`}>
                    <p>{name}</p>
                </Link>
            )}
            */}
        </div>
    )
}
