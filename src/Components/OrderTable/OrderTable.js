import React from 'react';
import { Table } from 'react-bootstrap';

const OrderTable = (props) => {
    const orderDetails = props.everyOrder;
    console.log(orderDetails);

    return (
        <div>
            <Table style={{ backgroundColor: "salmon" }} striped bordered hover size="sm">
                <thead>
                    <tr>

                        <th>Book Name</th>
                        <th>Price</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>{orderDetails.bookName}</td>
                        <td>{orderDetails.bookPrice}</td>
                        <td>{orderDetails.time}</td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default OrderTable;