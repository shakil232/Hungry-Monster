import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../../Shares/NavBar/NavBar';

import { FoodContext } from '../../../App';
import ReviewCard from '../ReviewCard/ReviewCard';



const Review = () => {
    const [foodInfo, setFoodInfo] = useContext(FoodContext);

    const handelRemove = id => {
        const remainingMeal = foodInfo.filter(food => food.idMeal !== id)
        setFoodInfo(remainingMeal)
    }

    return (
        < >
            <NavBar />
            <Container className=" mt-5">
                <div className='checkout-header-underline mb-5'>
                    <h3 className='text-muted'>Checkout</h3>
                </div>
                <div className="mt-2 d-flex align-content-center justify-content-center ">
                    <div className="row ">
                        {
                            foodInfo.map(meal => <ReviewCard
                                meal={meal}
                                handelRemove={handelRemove}
                                key={meal.idMeal}
                            />)
                        }
                    </div>
                </div>

            </Container>
        </>
    );
};

export default Review;