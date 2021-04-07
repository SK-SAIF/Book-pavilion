import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BookContext } from '../../App';
import BookCard from '../BookCard/BookCard';

const Home = () => {
    const spinner = (isShowing) => {
        const spinningPart = document.getElementById("loadSpinner");
        if (isShowing === true) {
            spinningPart.style.display = 'block';
        }
        else {
            spinningPart.style.display = 'none';
        }
    }
    const [allBooks, setAllBooks] = useContext(BookContext);
    useEffect(() => {
        spinner(true);
        fetch('https://polar-lowlands-56058.herokuapp.com/getAllBooks')
            .then(res => res.json())
            .then(data => {
                //const newData={...allBooks,data};
                setAllBooks(data);
                spinner(false);
            })
    }, [])
    return (
        <div>
            <div id="loadSpinner" style={{ display: 'none', justifyContent: "center", textAlign: "center" }}>
                <div>
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                </div>
            </div>
            {
                allBooks.map(item => <BookCard key={item._id} eachBook={item}></BookCard>)
            }
        </div>
    );
};
export default Home;