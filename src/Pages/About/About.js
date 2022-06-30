import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from '../Shares/NavBar/NavBar';

const About = () => {
    return (
        <>
            <NavBar />
            <Container className="mt-5 pt-5">
                <main className="row g-4">
                    <div className="col-md-4 offset-md-1">
                        <img className="img-fluid rounded-3" src="https://i.ibb.co/K6X8HWr/maxresdefault.jpg" alt="aboutUs" />
                    </div>
                    <div className=" col-md-6 mx-auto">
                        <h2 className="text-muted"> Hungry-Monster
                        </h2>
                        <p className="mt-4 text-muted text-justify">
                            Hungry-Monster is a single-page online food order website. it is a simple react-router application. The website dynamically changes the route with the URL. <br />
                            The website is built with React, React-Router and React-Bootstrap. <br />
                            There is a Homepage. The homepage has a search input field and displays food items, a button named add to cart and a Link name learn more.  <br />
                            If you click on the add to cart button, you will be adding the meal to your cart and you click on the learn more Link taken to the next page to view Meal detail.

                        </p>

                    </div>
                </main>
            </Container>
        </>
    );
};

export default About;