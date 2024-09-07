import React from 'react';
import './review.css';

const Review = () => {
    return (
        <div className="review-container">
            <div className="head">
                <div className="img-container">
                    <img src="/images/reviewer-img.png" alt="reviewer image"></img>
                </div>
                <div className="reviewer-details">
                    <span className="name">Payal Choudhary</span>
                    <span className="designation">Project Manager</span>
                    <div className="stars">
                        <img className='rotating' src="/images/star-given.png" alt="star given"></img>
                        <img className='rotating' src="/images/star-given.png" alt="star given"></img>
                        <img className='rotating' src="/images/star-given.png" alt="star given"></img>
                        <img className='rotating' src="/images/star-given.png" alt="star given"></img>
                        <img className='rotating' src="/images/star-ungiven.png" alt="star given"></img>
                    </div>
                </div>
            </div>
            <div className="body">
                "Pragati demonstrated a string ability to empathize with users and translates their needs into intuitive designs."
            </div>
        </div>
    )
}

export default Review;