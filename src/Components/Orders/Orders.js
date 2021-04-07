import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import OrderTable from '../OrderTable/OrderTable';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useContext(UserContext);
    useEffect(() => {
        fetch(`https://polar-lowlands-56058.herokuapp.com/getOrders?email=${user.userMail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    let len = orders.length;
    let total = orders[len - 1];
    return (
        <div>
            <h1>Orders</h1>
            <h1>Welcome: {user.userName}</h1>
            <div>
                {
                    orders.map(eachOrder => eachOrder.bookName ? <OrderTable key={eachOrder._id} everyOrder={eachOrder}></OrderTable> : <div></div>)
                }
            </div>
            <div style={{ backgroundColor: 'turquoise' }}>
                <hr />
                <h1>Total Price:{total}</h1>
            </div>
        </div>
    );
};
export default Orders;