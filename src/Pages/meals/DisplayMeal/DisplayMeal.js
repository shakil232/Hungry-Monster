import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavBar from '../../Shares/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'


const DisplayMeal = () => {
    const { idMeal } = useParams()
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    });
    return (
        <>
            <NavBar />
            <Container className="mt-3">
                <Row className="p-5">
                    <Col md={4} lg={4} sm={12} className="mx-auto">
                        <Card className="rounded-3 border-0" >
                            <Card.Img className="img-fluid rounded-3" src={details.strMealThumb} alt="strMealThumb" />
                            <Card.Body>
                                <Card.Title className="text-main">{details.strMeal}</Card.Title>
                                <div className='mt-2'>
                                    <h6 className="text-muted">Ingredients</h6>
                                    <ul className='list-unstyled text-muted mt-2'>
                                        <li><FontAwesomeIcon className='text-main me-3' icon={faSquareCheck} />
                                        {details.strIngredient1}
                                        </li>
                                        <li> <FontAwesomeIcon className='text-main me-3' icon={faSquareCheck} />
                                        {details.strIngredient2}
                                        </li>
                                        <li> <FontAwesomeIcon className='text-main me-3' icon={faSquareCheck} />
                                        {details.strIngredient3}
                                        </li>
                                        <li> <FontAwesomeIcon className='text-main me-3' icon={faSquareCheck} />
                                        {details.strIngredient4}
                                        </li>
                                        <li> <FontAwesomeIcon className='text-main me-3' icon={faSquareCheck} />
                                        {details.strIngredient5}
                                        </li>
                                        <li> <FontAwesomeIcon className='text-main me-3' icon={faSquareCheck} />
                                        {details.strIngredient6}
                                        </li>
                                       
                                    </ul>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DisplayMeal;