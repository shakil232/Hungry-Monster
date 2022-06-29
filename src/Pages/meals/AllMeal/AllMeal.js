import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const AllMeal = ({ meal, handleClick }) => {
    const { strMeal, strMealThumb, idMeal } = meal;
   
   console.log(meal)

    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12  g-5">
            <Card className=" rounded-3 shadow-lg m-auto" style={{ width: '16rem' }}>
                <Card.Img className="img-fluid " src={strMealThumb} alt="strMealThumb" />
                <Card.Footer>
                    <Card.Title className="custom-dark text-start">{strMeal}</Card.Title>
                
                    <div className="d-flex align-items-center justify-content-around mt-3">
                        <Link className="text-primary" to={`/mealDetail/ ${idMeal}`} >
                            learn more
                        </Link>

                        <Button onClick={() => handleClick(meal)} className="border-0  rounded-3 bg-main text-white">add to cart</Button>

                    </div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default AllMeal;