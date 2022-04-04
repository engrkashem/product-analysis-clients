import React from 'react';
import useChart from '../../hooks/useChart';
import InvestmentVsRevenue from '../InvestmentVsRevenue/InvestmentVsRevenue';
import MonthVsSell from '../MonthVsSell/MonthVsSell';

const Analysis = () => {

    //load chart data from local chartDb using custom hook
    const [data] = useChart();

    return (
        <div>
            <div className='mt-20'>
                <h2 className='text-center my-5 font-bold text-4xl text-indigo-900'>Month Vs Sell</h2>
                <MonthVsSell
                    key={'1'}
                    data={data}
                ></MonthVsSell>)
            </div>
            <div className='mt-20'>
                <h2 className=' text-center my-5 font-bold text-4xl text-indigo-900'>Investment Vs Revenue</h2>
                <InvestmentVsRevenue
                    key={'2'}
                    data={data}
                ></InvestmentVsRevenue>
            </div>
        </div>
    );
};

export default Analysis;