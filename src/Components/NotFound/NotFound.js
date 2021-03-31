import React from 'react';
import { Alert } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Alert variant="success">
                <Alert.Heading>Error</Alert.Heading>
                <p>
                    Sorry Page not found!!
                 </p>
                <hr />
                <p className="mb-0">
                   404: Connection request error!!
                </p>
            </Alert>
        </div>
    );
};

export default NotFound;