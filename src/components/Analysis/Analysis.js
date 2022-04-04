import React from 'react';
import useChart from '../../hooks/useChart';
import MonthVsSell from '../MonthVsSell/MonthVsSell';

const Analysis = () => {

    //load chart data from local chartDb by custom hook
    const [data] = useChart();
    // console.log(data)
    return (
        <div>
            <div className='mt-20 '>
                <h2 className=' text-center my-5 font-bold text-xl text-indigo-900'>Month Vs Sell</h2>
                <MonthVsSell
                    key={'1'}
                    data={data}
                >
                </MonthVsSell>)
            </div>

        </div>
    );
};

export default Analysis;