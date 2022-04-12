import React from 'react';
import './AntiqueOrangeButton.css';

const AntiqueOrangeButton = (props) => {
    return ( 
        <button className={props.bold ? "antiqueOrangeButton bold" : "antiqueOrangeButton"}>
            {props.name}
        </button>
     );
}
 
export default AntiqueOrangeButton;