import React from 'react';

const FeedbackInfoCard = ({feedback}) => {
    
    return (
        <div className="col-md-3 border border-secondary bg-light rounded m-3 p-3">
            <h4>{feedback.name}</h4>
            <h6>{feedback.designation}</h6>
            <p>{feedback.description}</p>
        </div>
    );
};

export default FeedbackInfoCard;