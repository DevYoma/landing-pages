import React from 'react';
import './AntiqueMainRightBadge.css';

const AntiqueMainRightBadge = (props) => {
    return ( 
        <div className="antiqueMainRightBadge">
                <div>
                    <img src={props.img} alt="badge" />
                </div>

                <div>
                    <h2>{props.year}</h2>
                    <p>{props.name}</p>
                </div>
        </div>
     );
}
 
export default AntiqueMainRightBadge;