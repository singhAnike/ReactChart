import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function PieChart() {
    const data = [
        {name: 'Appsdeployer', students: 400},
        {name: '', students: 700},
        {name: '', students: 200},
        {name: '', students: 1000}
      ];
      return (
        <BarChart width={300} height={300} data={data}>
        <Bar dataKey="students" fill="Blue" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
)
}
