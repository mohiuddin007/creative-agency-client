import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesInfoCard.css';

const ServicesInfoCard = ({data}) => {
    
    return (
        <div className="col-md-3 text-center m-3 p-3 servicesCard">
            <Link to={`./order/${data._id}`}>
            <img src={`data:image/png;base64,${data.image.img}`} className="rounded-circle mx-auto d-block cardImg" alt=""/>
            <h4 >{data.title}</h4>
            <p>{data.description}</p>
            </Link>
        </div>
         
    );
};

export default ServicesInfoCard;