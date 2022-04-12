import React from 'react';
import './AntiqueCarouselButton.css';


const AntiqueCarouselButton = (props) => {
    return ( 
        <button className={props.background ? "antiqueCarouselButton whiteBackground" : "antiqueCarouselButton"}>
            <img src={props.image} alt="Arrow" />
        </button>
     );
}
 
export default AntiqueCarouselButton;