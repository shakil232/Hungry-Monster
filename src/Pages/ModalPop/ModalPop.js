import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FoodContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

const ModalPop = ({ smShow, setSmShow }) => {
    const [foodInfo, setFoodInfo] = useContext(FoodContext);

    const handelRemove = id => {
        const remainingMeal = foodInfo.filter(food => food.idMeal !== id)
        setFoodInfo(remainingMeal)
        swal("Successfully Removed!", "Your Meal has been successfully Removed.", {
            icon: "success",
        });
        
    }


    return (
        <>
            <Modal
                size="lg"
                show={smShow}
                onHide={() => setSmShow(false)}
            >

                <Modal.Header closeButton>
                    <Modal.Title className="text-muted">Your Cart </Modal.Title>
                </Modal.Header>

                <Modal.Body className="mt-3">
                    {
                        foodInfo.map(food =>
                            <div className="d-flex justify-content-between align-items-center">
                                <ul className='list-unstyled text-main fs-5'>
                                    <li>{food.strMeal}</li>
                                </ul>

                                <FontAwesomeIcon onClick={() => handelRemove(food.idMeal)} className='text-danger cursor fs-5' icon={faXmark} />

                            </div>
                        )
                    }
                </Modal.Body>



            </Modal>
        </>
    );
};

export default ModalPop;