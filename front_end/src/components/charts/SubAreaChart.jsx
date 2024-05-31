import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

export default function SubAreaChart({ w,h,data,datakey }) {
  const dataexmp = [
    {
      name: '29-5-2024',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '30-5-2024',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '31-5-2024',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '1-6-2024',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '2-6-2024',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '3-6-2024',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '4-6-2024',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]
  return (
    <ResponsiveContainer height={h} >
    <AreaChart
      width={w}
      height={h}
      data={dataexmp}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8C41F3" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8C41F3" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8C41F3" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8C41F3" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis type="number">
        <Label value="Revenu in DH" angle={-90} position="insideLeft" fill="#8C41F3" />
      </YAxis>
      <Tooltip />
      <Area
        type="monotone"
        dataKey={"pv"}
        stroke="#8C41F3"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  </ResponsiveContainer>
  );
}
