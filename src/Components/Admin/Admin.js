import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, Route, Router, Switch } from 'react-router-dom';
import { BookContext } from '../../App';
import ManageBooks from '../ManageBooks/ManageBooks';
import './Admin.css';


const Admin = () => {
    const [allBooks, setAllBooks] = useContext(BookContext);

    //local state
    const [bookInfo, setBookInfo] = useState({
        name: '',
        price: '',
        imageURl: ''
    })
    const handleBookName = event => {
        const newBookName = { ...bookInfo };
        newBookName.name = event.target.value;
        setBookInfo(newBookName);
        //console.log(newBookName);
    }
    const handleBookPrice = event => {
        const newBookPrice = { ...bookInfo };
        newBookPrice.price = event.target.value;
        setBookInfo(newBookPrice);
        //console.log(newBookPrice);
    }
    const handleBookImage = event => {
        const imageData = new FormData();
        imageData.set('key', '33f668f9150f47eb063aa1fef5fb391d');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                //console.log(response.data.data.display_url);
                const newBookImage = { ...bookInfo };
                newBookImage.imageURl = response.data.data.display_url;
                setBookInfo(newBookImage);
                // console.log(newBookImage);
            })
            .catch(function (error) {
                console.log(error);
            });

    }



    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (event) => {
        //console.log("Total information for books",bookInfo);

        fetch('https://polar-lowlands-56058.herokuapp.com/addBook', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log("OK");
            })

    };

    return (
        <div>
            <div className="sidebar">
                <a className="active" >Admin Panel</a>
                <Link to="/ManageBooks">Manage Books</Link>
                <Link to="/AddBooks">Add Books</Link>
                <a href="#edit">Edit Books</a>
            </div>

            <div className="content">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Add Books here!</h3>    
                    <label>Book Name</label>
                    <input name="bookName" type="text" id="bookName" onBlur={handleBookName} />
                    <label>Book Price</label>
                    <input name="bookPrice" type="text" id="bookPrice" onBlur={handleBookPrice} />
                    <label>Book Image</label>
                    <input name="bookImage" type="file" id="bookImage" onChange={handleBookImage} />
                    <input type="submit" />
                </form>
            </div>
           
        </div>
    );
};

export default Admin;