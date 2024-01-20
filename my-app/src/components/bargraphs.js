import React from "react";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

export default function apoorv(){
  const data = [
    { name: "Property tax", paid: 2000,unpaid: 1500},
    { name: "water tax", paid: 1500, unpaid: 2000 },
    { name: "garbage tax", paid: 1200, unpaid: 1200 },
   ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Socail Media Users</h1>
      <div className="App">

        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 15, right: 15 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="paid" fill="#8884d8" background={{ fill: "#eee" }} />
          <Bar dataKey="unpaid" fill="#0084d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
}