import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesInfoCard.css';
import {useSpring, animated} from 'react-spring';


const ServicesInfoCard = ({data}) => {

    const styles = useSpring({
        from: {
            opacity: 0
        },
            opacity: 1
        });
    
    return (
        <div className="col-md-3 text-center text-dark m-3 p-3 servicesCard">
            <Link to={`./order/${data._id}`} style={{textDecoration: 'none'}}>
            <img src={`data:image/png;base64,${data.image.img}`} className="rounded-circle mx-auto d-block cardImg" alt=""/>
               <animated.div style={styles}>
                    <h4 >{data.title}</h4>
                    <p>{data.description}</p>
                </animated.div>
            </Link>
            
        </div>
         
    );
};

export default ServicesInfoCard;