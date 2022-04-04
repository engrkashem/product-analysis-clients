import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

//making custom Pie Chart 
const InvestmentVsRevenue = ({ data }) => {

    //custom color for diff sec. of pie chart
    const colors = ['#0088FE', '#0000cd', '#FF8042', '#dc143c', '#9932cc', '#FFBB28'];

    const RADIAN = Math.PI / 180;

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    //making line & pir chart
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 justify-between'>
            <BarChart
                width={350}
                height={400}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#FF8042" />
            </BarChart>

            <div>
                <h3 className='text-center mt-5  font-bold text-xl text-indigo-900'>Investment</h3>
                <PieChart width={350} height={350}>
                    <Tooltip />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="investment"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div>
                <h3 className='text-center mt-5 font-bold text-xl text-indigo-900'>Revenue</h3>
                <PieChart width={350} height={350}>
                    <Tooltip />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="revenue"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>

        </div>
    );
};

export default InvestmentVsRevenue;