import React, { useContext } from 'react';
import { BookContext } from '../../App';
import ManageEachBook from '../ManageEachBook/ManageEachBook';

const ManageBooks = () => {
    const [allBooks, setAllBooks]=useContext(BookContext);

    return (
        <div>
            {
                allBooks.map(items=><ManageEachBook eachBook={items}></ManageEachBook>)
            }
        </div>
    );
};

export default ManageBooks;