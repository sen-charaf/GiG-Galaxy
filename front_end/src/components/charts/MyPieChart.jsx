import React from "react";
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";

export default function BooksPieChart({
  w,
  h,
  cx,
  cy,
  sizein,
  sizeout,
  label,
  data,
  colors,
}) {
  const COLORS = ["#ff8800", "rgb(209 213 219)", "#FFBB28", "#FF8042"];
  
  return (
    <PieChart width={w} height={h}>
      
      <Tooltip />
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx={cx}
        cy={cy}
        outerRadius={sizeout}
        innerRadius={sizein}
        fill="#ff8800"
        label={label}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
