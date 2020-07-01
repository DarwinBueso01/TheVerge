import React from 'react';

const Card = ({card}) => {
    const {index, image, description} = card;
    return (
        <div id={`card-${index}`} className="als-Card">
            <img src={image} alt={description} ></img>
            <div className="details">
                <p className="location">
                    {description}
                </p>
            </div>
        </div>
    )
}


export default Card;