import React from 'react';

const ServiceListInfo = ({order}) => {
    return (
        <div className="col-md-5 bg-light border rounded m-3 p-3">
            <h2>{order.title}</h2>
            <p>{order.details}</p>
        </div>
    );
};

export default ServiceListInfo;