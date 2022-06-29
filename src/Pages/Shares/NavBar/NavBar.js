import React, { useContext, useState } from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'
import { FoodContext } from '../../../App';
import ModalPop from '../../ModalPop/ModalPop';


const NavBar = () => {
    const [ foodInfo, setFoodInfo  ] = useContext(FoodContext);
    const [smShow, setSmShow] = useState(false);

    return (
        <>
        <Navbar  bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#home">
                    <Image width="100" height="55" src="https://i.ibb.co/TRSwHvv/hungry-logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="ms-4" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to="/review">Review</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="ms-4" as={Link} to="/contact">Contact</Nav.Link>

                        <Nav.Link className="border-0 bg-transparent position-relative ms-4">
                            <FontAwesomeIcon   className='text-main' icon={faCartPlus} />
                            <span onClick={()=> setSmShow(!smShow)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">   
                            {foodInfo.length}
                            </span>
                            
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <ModalPop
         smShow={smShow}
         setSmShow={setSmShow}
        />
        </>
    );
};

export default NavBar;