import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainCamera from '../../images/main-camera.png'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-around items-center mt-16 h-full'>
            <div className='w-1/2'>
                <h1 className='text-6xl font-semibold text-indigo-900'>ONE SHOT..</h1>
                <h1 className='text-6xl font-semibold text-indigo-800'>ONE MEMORY !!</h1>
                <p className='text-xl mt-5 text-emerald-600'>Photoes are not just Photographs. What fascinates me is not photographs that have an obvious catastrophic history or story behind them, that would make them memorable because of the content</p>
                <button onClick={() => navigate('/about')} className='py-5 px-10 bg-teal-400 text-indigo-800 font-bold mt-10 rounded-lg text-lg'>Packages</button>
            </div>
            <div>
                <img src={mainCamera} alt="" />
            </div>
        </div>
    );
};

export default Home;