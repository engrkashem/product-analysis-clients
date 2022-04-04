import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col items-center'>
            <h2 className=' text-6xl font-semibold text-indigo-900  text-center mt-10'>Our Packages</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                <div className=' border-2  mx-2 p-5 rounded-lg mb-5 h-[300px]'>
                    <h3 className=' text-indigo-800 font-semibold text-2xl mb-5'>Regular Package</h3>
                    <ul className='border-teal-600 text-teal-800 font-medium'>
                        <li>Natural Vibes</li>
                        <li>Real Flower is used</li>
                        <li>Exclusive Buffet Lunch/Dinner</li>
                        <li>VIP Lounge</li>
                    </ul>
                    <button className='w-full bg-indigo-300 p-4 text-2xl text-indigo-800 font-bold rounded-3xl mt-5'>$ 299.00</button>
                </div>
                <div className=' border-2  mx-2 p-5 rounded-lg mb-5 h-[300px]'>
                    <h3 className=' text-indigo-800 font-semibold text-2xl mb-5'>Business Package</h3>
                    <ul className='border-teal-600 text-teal-800 font-medium'>
                        <li>Natural Vibes</li>
                        <li>Real Flower is used</li>
                        <li>Exclusive Buffet Lunch/Dinner</li>
                        <li>VIP Lounge</li>
                    </ul>
                    <button className='w-full bg-indigo-300 p-4 text-2xl text-indigo-800 font-bold rounded-3xl mt-5'>$ 399.00</button>
                </div>
                <div className=' border-2  mx-2 p-5 rounded-lg h-[300px]'>
                    <h3 className=' text-indigo-800 font-semibold text-2xl mb-5'>Premium Package</h3>
                    <ul className='border-teal-600 text-teal-800 font-medium'>
                        <li>Natural Vibes</li>
                        <li>Real Flower is used</li>
                        <li>Exclusive Buffet Lunch/Dinner</li>
                        <li>VIP Lounge</li>
                    </ul>
                    <button className='w-full bg-indigo-300 p-4 text-2xl text-indigo-800 font-bold rounded-3xl mt-5'>$ 499.00</button>
                </div>
            </div>
            <h2 className=' text-6xl font-semibold text-indigo-900  text-center mt-10'>OUR ADDRESSES</h2>
            <div className=' border-2 border-teal-600 text-teal-800 font-medium w-80 h-40 text-center mt-10 pt-10 rounded-lg'>
                <p>40/8-ka, Port Road, KhalishPur, Khulna</p>
                <p>Email: kashemaust@gmail.com</p>
                <p>Cell Phone: 01787000000</p>
            </div>
        </div>
    );
};

export default About;