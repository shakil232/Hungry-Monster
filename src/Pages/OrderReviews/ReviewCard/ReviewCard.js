import React from 'react';
import { Card, Button } from 'react-bootstrap';


const ReviewCard = ({ meal, handelRemove }) => {
    const { strMeal, strMealThumb, idMeal } = meal;
    return (
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12  g-5">
            <Card className=" rounded-3 shadow-lg m-auto" style={{ width: '16rem' }}>
                <Card.Img className="img-fluid " src={strMealThumb} alt="strMealThumb" />
                <Card.Footer>
                    <Card.Title className="custom-dark text-start">{strMeal}</Card.Title>
                    <Button onClick={() => handelRemove(idMeal)} className="border-0  rounded-3 bg-danger">remove to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ReviewCard;