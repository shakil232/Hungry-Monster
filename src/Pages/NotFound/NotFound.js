import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../Shares/NavBar/NavBar';


const NotFound = () => {
    return (
        <Container >
            <NavBar />
            <main className="text-center mt-5">
                <h2>not found</h2>
            </main>
        </Container>
    );
};

export default NotFound;