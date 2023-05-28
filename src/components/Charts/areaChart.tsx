import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "01 -10",
    uv: 2400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "10-20",
    uv: 3300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "20-30",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

export default function AreaCharts() {
  return (
    <div>
      <ResponsiveContainer width="95%" height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#ff9502" fill="#ff7c02" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
