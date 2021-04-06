import React from 'react';
import './ManageEachBook.css';
const ManageEachBook = (props) => {
    let singleBook=props.eachBook;
    //console.log(singleBook);
    const handleBookDelete=(id)=>{
        console.log(id);
        fetch(`https://polar-lowlands-56058.herokuapp.com/DeleteOne/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json)
        .then(result=>{
            if(result){
                console.log("Delete Done");
            }
        })
    }

    const adminManageBooks={backgroundColor:"salmon",border:"5px solid black",borderRadius:"20px"};
    return (
        <div className="adminManageBooks">
            <h3>Book Name:{singleBook.name} </h3>
            <img src={singleBook.imageURl} alt=""/>
            <button onClick={()=>handleBookDelete(singleBook._id)}>Delete</button>
        </div>
    );
};

export default ManageEachBook;