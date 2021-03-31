import React, { useState } from 'react';
import './BookCard.css'
const BookCard = (props) => {
    let bookCardInfo=props.eachBook;
    return (
        <div>
            <h1>Name:{bookCardInfo.name}</h1>
            <br/>
            <img src={bookCardInfo.imageURl} alt=""/>
            <br/>
            <button>Buy Now</button>
        </div>
    );
};

export default BookCard;