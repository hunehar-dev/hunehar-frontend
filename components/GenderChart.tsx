"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const genderData = [
  { name: "Girls", value: 75 },
  { name: "Boys", value: 78 },
];

const COLORS = ["#f79dc6", "#206FAC"];

export default function GenderChart() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[250px] h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={genderData}
              dataKey="value"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={2}
            >
              {genderData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
