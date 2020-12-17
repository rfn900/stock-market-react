import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import styled from "styled-components";
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

  console.log(instrument);

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
      Y: instrument["y5"],
      X: "y5",
    },
    {
      Y: instrument["y3"],
      X: "y3",
    },
    {
      Y: instrument["w1"],
      X: "w1",
    },
    {
      Y: instrument["today"],
      X: "today",
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
          <h3>{instrument.name}</h3>
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
                <XAxis dataKey="X" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Y" stroke="#AC9FBB" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
}
