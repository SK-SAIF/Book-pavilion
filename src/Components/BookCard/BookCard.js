import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import './BookCard.css'
const BookCard = (props) => {
    let bookCardInfo=props.eachBook;
    const [user, setUser]=useContext(UserContext);
    const handleBuyButton=(id,bookName,bookPrice)=>{
        
        console.log(id,bookName,bookPrice);

        const orderInfo={userName:user.displayName,userMail:user.email,id,bookName,bookPrice,time:new Date()};
        console.log(orderInfo);

        fetch('https://polar-lowlands-56058.herokuapp.com/placeOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(orderInfo)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    }
    return (
        <div className="bookCard">
            <h1 style={{color:"green",fontSize:"40px",fontWeight:"800",fontFamily:"inherit"}}>{bookCardInfo.name}</h1>
            <br/>
            <img src={bookCardInfo.imageURl} alt=""/>
            <br/>
            <button onClick={()=>handleBuyButton(bookCardInfo._id,bookCardInfo.name,bookCardInfo.price)}>Buy Now</button>
            <h3>Price:{bookCardInfo.price}</h3>
        </div>
    );
};

export default BookCard;