import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import mainCamera from '../../images/main-camera.png'
import Review from '../Review/Review';

const Home = () => {

    //Navigation 
    const navigate = useNavigate();

    //Load review data from local db using custom hook
    const [reviews] = useReviews();

    //seperating 3 review out of many
    const halfReviews = reviews.slice(0, 3);

    return (
        <div>
            <div className='sm:flex justify-around items-center mt-32 sm:mt-12 h-full '>
                <div className='sm:w-1/2 px-8 '>
                    <h1 className='text-6xl font-semibold text-indigo-900 text-justify'>ONE SHOT..</h1>
                    <h1 className='text-6xl font-semibold text-indigo-800'>ONE MEMORY !!</h1>
                    <p className='text-xl mt-5 text-emerald-600 text-justify'>Photoes are not just Photographs. What fascinates me is not photographs that have an obvious catastrophic history or story behind them, that would make them memorable because of the content</p>
                    <button onClick={() => navigate('/about')} className='py-5 px-10 bg-teal-400 text-indigo-800 font-bold mt-10 rounded-lg text-lg'>Packages</button>
                </div>
                <div>
                    <img src={mainCamera} alt="" />
                </div>
            </div>
            <div className='mt-36 mx-10'>
                <h3 className=' text-5xl text-center my-6 text-indigo-900'>Clients Appreciations </h3>
                {
                    halfReviews.map(review => <Review
                        key={review.id}
                        review={review}
                    >
                    </Review>)
                }
                <div className='flex justify-center mt-10'>
                    <button onClick={() => navigate('/reviews')} className=' text-lg font-medium px-5 py-2 bg-teal-400 text-indigo-800 rounded-xl'>Find All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;