import React, { useEffect, useState } from 'react';
import FeedbackInfoCard from '../FeedbackInfoCard/FeedbackInfoCard';
import loadingGifImg from '../../../images/loding gif/f941ae9d16fd7d2957eea6e5b1100d1e.gif';

const Feedback = () => {
     const [clientsFeedback, setClientsFeedback] = useState([]);

     useEffect(() => {
         fetch('https://immense-island-63375.herokuapp.com/customerReview')
         .then(res => res.json())
         .then(data => {
             setClientsFeedback(data);
         })
     }, [])

    return (
        <div className="mt-5">
            <h1 className="text-center">Clients <span className="text-info">Feedback</span></h1>
            <div className="row justify-content-center mt-5">
                {
                    clientsFeedback.length === 0 && <img src={loadingGifImg} alt="loadingGifImage"/>
                }
                 {
                     clientsFeedback.map(feedback => <FeedbackInfoCard feedback={feedback} key={feedback._id}/>)
                 }
            </div>
        </div>
    );
};

export default Feedback;