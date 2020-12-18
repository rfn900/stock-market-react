import React from "react";
import { Link, useLocation } from "react-router-dom";

import { CardStyled } from "./CardStyled";

// Got 4 cards propaties from MainPage.jsx.
export default function Card({ path, ticker, name, isHome }) {
  //If the name property is empty, render(show) line 23 <p>{renderedName}</p> the ticker instead because we use it for name={item[1].name} ofInstrumentListPage.jsx.
  const renderedName = name === "" ? ticker : name;
  //To link URL if isHome is true then URL is path otherwise path + / + ticker (is a data of inside Markets, Crypto...  of stock)
  //(For the Markets card the url must contain the ticker prop)
  const url = isHome ? path : `${path}/${ticker}`;

  // Get all the URL path (http://localhost:3000/crypto/usd) and
  const location = useLocation();
  // Take the last part after (/crypto/usd).
  // (This allow us to check if we are on the MainPage)
  const testPath = location.pathname;

  // Check if it is MainPage by using the testPath. If it is MainPage, make let dynamicClassName = "col-sm-6" otheriwise let dynamicClassName = "col-sm-4" .
  // This is the same code below. ? mean is if, : mean else.
  //   if (testPath === "/") {
  //     let dynamicClassName = "col-sm-6"
  //   } else {
  //     let dynamicClassName = "col-sm-4"
  //   }
  const dynamicClassName = testPath === "/" ? "col-sm-6" : "col-md-4";

  // Render different bootstrap style when we are on MainPage
  return (
    // `p-2 ${dynamicClassName}` is the same as "p-2 " + dynamicClassName so give padding 2. Each card size depend on if MainPage.
    <div className={`p-2 ${dynamicClassName}`}>
      {/* Link to next url from line 12 */}
      <Link to={url}>
        <CardStyled className="card p-2 text-center">
          {/* What to show inside card 
            Check if path is "/markets", show folloings.
            This is the same code below. ? mean is if, : mean else.
            if (path === "/markets") {
                <p>{ticker}</p>
            } else {
                <p>{renderedName}</p>
            }*/}
          {/* (This prevents an empty Card to be rendered on MainPage) */}
          {path === "/markets" ? <p>{ticker}</p> : <p>{renderedName}</p>}
        </CardStyled>
      </Link>
    </div>
  );
}
