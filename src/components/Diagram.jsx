import React from "react";
// Recharts is a library that allows you to easily draw SVG charts with React.
// There are many other libraries that can draw charts, but this time I chose Recharts for the following reasons.
// You can write code like React using React component (easy to read).
// It can be customized to some extent, and it seems easy to respond responsively.
// $ npm install recharts and import.
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
  // The data displayed in the graph is as follows. Got 5 data points from the API instrument array from InstrumentDetailPage.jsx.
  // Price is displayed on the Y-axis and Time is displayed on the X-axis.
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

  // function of caluclate price
  function calculatePrice(variation) {
    return instrument["price"] / (variation / 100 + 1);
  }

  // The code of the graph is as follows.
  return (
    <>
      {/* Enclose it in ResponsiveContainer to make it responsive. Convenient! */}
      <div className="py-5" style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          {/* Use LineChart for line charts. */}
          <LineChart
            className="container-fluid"
            width={600}
            height={300}
            data={LineChartData} // Data to display
            margin={{
              top: 5,
              right: 60,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* Display of guide line */}
            <XAxis dataKey="Time" /> {/* X-axis */}
            <YAxis /> {/* Y-axis */}
            <Tooltip /> {/* Display tooltips */}
            <Line
              type="monotone" // interpolation function
              dataKey="Price" // key of LineChartData
              stroke="#AC9FBB" // Line color
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
