import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../App';
import BookCard from '../BookCard/BookCard';

const Home = () => {
    const [allBooks, setAllBooks]=useContext(BookContext);
   
    useEffect(()=>{
        fetch('http://localhost:5000/getAllBooks')
        .then(res=>res.json())
        .then(data=>{
            //const newData={...allBooks,data};
            setAllBooks(data);
        })
    },[])
    
    console.log(allBooks);
    return (
        <div>
           {
               allBooks.map(item=><BookCard key={item._id} eachBook={item}></BookCard>)
           }
        </div>
    );
};

export default Home;