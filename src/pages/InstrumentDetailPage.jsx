import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import styled from "styled-components";
import Favorite from '../components/Favorite';
import Diagram from "../components/Diagram";

const RowStyled = styled.tr`
  &:hover {
    background-color: rgba(172, 160, 187, 0.075) !important;
  }
`;

export default function InstrumentDetailPage(props) {
  const [instrument, setInstrument] = useState({});

  // keys we don't want to display
  const hiddenInfo = [
    "source",
    "link",
    "name",
    "omni_ticker",
    "ticker",
    "values",
  ];

  // keys and their text for display
  const details = {
    market: "Market",
    mtd: "Month to date",
    price: "Price",
    today: "Today",
    w1: "One week",
    y3: "Three years",
    y5: "Five years",
    ytd: "Year to date",
  };

  // fetch instrument object from api
  useEffect(() => {
    const path = props.match.url;
    const url = `https://market-data-collector.firebaseio.com/market-collector${path}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInstrument(data));
  }, []);

  return (
    <>
      <Breadcrumbs />
      {!instrument && <p>Loading...</p>}

      {instrument && (
        <div>                      {/* Save to favorites icon */}
          <h3>{instrument.name}   <Favorite instrument={instrument} path={props.match.url}/></h3>

          <table className="table table-hover">
            <tbody>
              {Object.entries(instrument).map((entry, index) => {
                {/* Display details not in hiddenInfo array */}
                if (!hiddenInfo.includes(entry[0])) {
                  return (
                    <RowStyled key={index}>
                      <th>{details[entry[0]]}:</th>
                      <td>{entry[1]}</td>
                    </RowStyled>
                  );
                }
              })}
            </tbody>
          </table>
          {/* show diagram for instruments with proper data */}
          {instrument["ytd"] !== undefined && (
            <Diagram instrument={instrument} />
          )}
        </div>
      )}
    </>
  )
}