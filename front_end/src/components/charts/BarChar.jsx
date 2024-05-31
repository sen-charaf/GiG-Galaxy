import { Flag } from "@mui/icons-material";
import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarChar({ w, h, data }) {
  return (
    <div>
      <BarChart width={w} height={h} data={data}>
        <XAxis dataKey="name" hide  />
        <YAxis  />
        <Tooltip dataKey="name"/>
        <Legend />
        <Bar dataKey="value" fill="#8C41F3" />
      </BarChart>
    </div>
  );
}
