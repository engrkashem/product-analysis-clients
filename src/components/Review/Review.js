import React from 'react';
import { StarIcon } from '@heroicons/react/solid'

const Review = ({ review: { name, img, review, rating } }) => {

    // making review card
    return (
        <div className='sm:flex  justify-between items-center mt-4 border-2 border-teal-400 rounded p-4'>
            <div>
                <img className=' rounded-full' src={img} alt="" />
                <div>
                    <h3 className='text-indigo-700 font-medium my-5 flex'>Ratings: <span className=' text-yellow-400 flex items-center justify-start ml-2'>
                        <span >{rating}</span>
                        <StarIcon className='w-5 ml-1'></StarIcon>
                        <StarIcon className='w-5 ml-1'></StarIcon>
                        <StarIcon className='w-5 ml-1'></StarIcon>
                        <StarIcon className='w-5 ml-1'></StarIcon>
                        <StarIcon className='w-5 ml-1'></StarIcon>
                    </span>
                    </h3>
                </div>
            </div>
            <div className='sm:w-1/2 w-full'>
                <h2 className='text-2xl font-medium text-indigo-700'>{name}</h2>
                <p className='text-lg text-emerald-600'>{review}</p>
            </div>
        </div>
    );
};

export default Review;