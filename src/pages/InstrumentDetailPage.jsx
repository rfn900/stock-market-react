import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import styled from "styled-components";
import Favorite from '../components/Favorite';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RowStyled = styled.tr`
  &:hover {
    background-color: rgba(172, 160, 187, 0.075) !important;
  }
`;

export default function InstrumentDetailPage(props) {
  const [instrument, setInstrument] = useState({});

  const hiddenInfo = [
    "source",
    "link",
    "name",
    "omni_ticker",
    "ticker",
    "values",
  ];

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

  const LineChartData = [
    {
      Price: instrument["y5"],
      Time: "y5",
    },
    {
      Price: instrument["y3"],
      Time: "y3",
    },
    {
      Price: instrument["w1"],
      Time: "w1",
    },
    {
      Price: instrument["today"],
      Time: "today",
    },
  ];

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
        <div>
          <h3>{instrument.name}   <Favorite instrument={instrument} path={props.match.url}/></h3>

          <table className="table table-hover">
            <tbody>
              {Object.entries(instrument).map((entry, index) => {
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
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart
                className="container-fluid"
                width={600}
                height={300}
                data={LineChartData}
                margin={{
                  top: 5,
                  right: 60,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Price" stroke="#AC9FBB" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  )
}