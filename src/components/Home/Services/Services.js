import React, { useEffect, useState } from 'react';
import loadingGif from '../../../images/loding gif/afb8cb36197347.5713616457ee5.gif';
import ServicesInfoCard from '../ServicesInfoCard/ServicesInfoCard';

const Services = () => {
    const [servicesInfo, setServicesInfo] = useState([]);

    useEffect(() =>{
        fetch('https://immense-island-63375.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServicesInfo(data);
        })
    },[])

    return ( 
        <div className="container mt-5 pt-5">
            <h1 className="text-center">Provide awesome <span className="text-info">Services</span></h1>
           
            <div className="row justify-content-center mt-5">
               {
                   servicesInfo.length === 0 && <img src={loadingGif} style={{width:'400px', textAlign:'center'}} alt="loading"/>
               }
                { 
                   servicesInfo.map( data => <ServicesInfoCard data={data}/>)
                }
               
            </div>
        </div>
    );
};

export default Services;