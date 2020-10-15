import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurPortfolio from '../OurPortfolio/OurPortfolio';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <OurPortfolio/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;