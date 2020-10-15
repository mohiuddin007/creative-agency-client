import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import headerImg from '../../../images/logos/Frame.png';
import ClientLogos from '../ClientLogos/ClientLogos';

const Header = () => {
    return (
        <div>
            <div className="header">
                <Navbar />
                <div className="container">
                    <div className="row p-4">
                        <div className="col-md-4 mt-5">
                            <h1>Let's Grow Your Brand To The Next Level</h1>
                            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ducimus debitis, veniam veritatis quae voluptatibus, officiis quidem amet commodi nihil unde id sint ad quis?</p>
                            <button className="btn btn-dark px-4 mt-4">Hire us</button>
                        </div>
                        <div className="col-md-8 p-2">
                            <img src={headerImg} className="img-fluid" alt="headerImg" />
                        </div>
                    </div>
                </div>
            </div>
            <ClientLogos/>
        </div>
    );
};

export default Header;