import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Diagram({ instrument }) {
  const LineChartData = [
    {
      Price: calculatePrice(instrument["y5"]),
      Time: "5 years",
    },
    {
      Price: calculatePrice(instrument["y3"]),
      Time: "3 years",
    },
    {
      Price: calculatePrice(instrument["ytd"]),
      Time: "year to date",
    },
    {
      Price: calculatePrice(instrument["w1"]),
      Time: "week ago",
    },
    {
      Price: instrument["price"],
      Time: "today",
    },
  ];

  function calculatePrice(variation) {
    return instrument["price"] / (variation / 100 + 1);
  }

  return (
    <>
      <div className="py-5" style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            className="container-fluid"
            width={600}
            height={300}
            data={LineChartData} 
            margin={{
              top: 5,
              right: 60,
              left: -30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Time" /> 
            <YAxis /> 
            <Tooltip /> 
            <Line
              type="monotone" // interpolation function
              dataKey="Price" 
              stroke="#253b80" 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
