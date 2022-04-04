import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    //Loading review data from local db using custom hook
    const [reviews] = useReviews();

    return (
        <div >
            <h2 className=' text-5xl text-center mb-6 mt-32 sm:mt-5 text-indigo-900'>Clients Appreciations</h2>
            <div className=' p-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;