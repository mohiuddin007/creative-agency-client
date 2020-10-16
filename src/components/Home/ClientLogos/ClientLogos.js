import React from 'react';
import googleLogo from '../../../images/logos/google.png';
import airbnbLogo from '../../../images/logos/airbnb.png';
import netflixLogo from '../../../images/logos/netflix.png';
import slackLogo from '../../../images/logos/slack.png';
import uberLogo from '../../../images/logos/uber.png';
import './ClientLogos.css';


const ClientLogos = () => {
    return (
        <div className="container mt-5">
           <div className="row mx-1 justify-content-center">
               <div className="col-md-2">
                   <img src={slackLogo} className="clientLogo img-fluid" alt="slackLogo"/>
               </div>
               <div className="col-md-2">
                  <img src={googleLogo} className="clientLogo img-fluid" alt="googleLogo"/>
               </div>
               <div className="col-md-2">
                 <img src={uberLogo} className="clientLogo img-fluid" alt="uberLogo"/>
               </div>
               <div className="col-md-2">
                 <img src={netflixLogo} className="clientLogo img-fluid" alt="netflixLogo"/>
               </div>
               <div className="col-md-2">
                  <img src={airbnbLogo} className="clientLogo img-fluid" alt="airbnbLogo"/>
                </div>  
            </div>            
        </div>
    );
};

export default ClientLogos;