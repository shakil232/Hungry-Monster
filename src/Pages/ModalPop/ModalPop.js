import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FoodContext } from '../../App';

const ModalPop = ({ smShow, setSmShow }) => {

    const [foodInfo, setFoodInfo] = useContext(FoodContext);



    return (
        <>
            <Modal
                size="lg"
                show={smShow}
                onHide={() => setSmShow(false)}
            >

                <Modal.Header closeButton>
                    <Modal.Title className="text-muted">Add Meals</Modal.Title>
                </Modal.Header>

                <Modal.Body className="mt-3">
                    {
                        foodInfo.map(food =>
                            <ul className='list-unstyled text-main fs-5'>
                                <li>{food.strMeal}</li>
                            </ul>
                        )
                    }
                </Modal.Body>



            </Modal>
        </>
    );
};

export default ModalPop;