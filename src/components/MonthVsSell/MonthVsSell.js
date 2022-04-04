import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MonthVsSell = ({ data }) => {

    //Making line & bar chart
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 justify-between' >
            <LineChart
                width={350}
                height={400}
                data={data}
            >
                <CartesianGrid strokeDasharray={'3 3'} />
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type={'monotone'} dataKey={'sell'} stroke={'#8884d8'} activeDot={{ r: 5 }}></Line>
            </LineChart>
            <BarChart width={350} height={400} data={data}>
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray={'3 3'} />
                <Legend />
                <Bar dataKey={'sell'} fill='#8884d8'></Bar>
            </BarChart>
        </div>
    );
};

export default MonthVsSell;