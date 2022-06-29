import React, { useContext, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FoodContext } from '../../App';
import AllMeal from '../meals/AllMeal/AllMeal';
import NavBar from '../Shares/NavBar/NavBar';
import SyncLoader from "react-spinners/SyncLoader";
import toast, { Toaster } from 'react-hot-toast'

const Home = () => {
    const [allMeal, setAllMeal] = useState([]);
    const [search, setSearch] = useState('');
    const [card, setCard] = useState([]);
    const [foodInfo, setFoodInfo] = useContext(FoodContext);
 

    // Enter-key-active 
    const enterKeyPress = event => {
        if (event.key === "Enter") {
            document.getElementById('search-btn').click();
        }
    };

    //search-filed and click
    const handelClick = () => {
        const searchText = document.getElementById('search-text').value;
        document.getElementById('search-text').value = '';
        console.log(searchText)
        setSearch(searchText)
    };

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                if (data.meals) {
                    setAllMeal(data.meals)
                }
                else {
                    toast.error("Your search are not Found", {
                        duration: 4000,
                    })
                }
            })
    }, [search]);

    // addToCart
    const handleClick = (meal) => {
        const newCard = [...card, meal];
        setCard(newCard);
        setFoodInfo(newCard);
    };



    return (
        < >
            <NavBar />
            <Toaster />
            <Container className="text-center mt-3">
                <div className="row p-5">
                    <div className="col-md-6 mx-auto d-flex justify-content-center align-items-center">
                        <input id="search-text"
                            className="form-control rounded-3"
                            onKeyPress={enterKeyPress}
                            type="text" name="text" placeholder="search your meal" />

                        <Button id="search-btn" onClick={handelClick} className="btn btn-main ">Search</Button>
                    </div>
                </div>

                {
                    allMeal.length === 0 ?
                        <div className="d-flex align-content-center justify-content-center p-5">
                <SyncLoader color={"#36D7B7"} loading={allMeal}
                    width={8}
                    height={18}
                    radius={10}
                    margin={10}
                />
            </div>
            :
            <div className="mt-2 d-flex align-content-center justify-content-center ">
                <div className="row ">
                    {
                        allMeal.map(meal => <AllMeal
                            handleClick={handleClick}
                            meal={meal}
                            key={meal.idMeal}
                        />
                        )}
                </div>
            </div>
                }


        </Container>
        </>
    );
};

export default Home;