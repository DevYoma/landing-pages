import React, { useState } from 'react';
import './MikeyVerticalNav.css';

const MikeyVerticalNav = () => {
    const [verticalNavDetails] = useState([
        {
            id:1,
            name: "Email",
            detail: "veero@gmail.com"
        },
        {
            id: 2,
            name: "Phone",
            detail: "+91 34859 48584"
        },
        {
            id: 3,
            name: "Location",
            detail: "Lahore Pakistan"
        }
    ])

    const mappedVerticalNavDetails = verticalNavDetails.map(navDetails => (
        <div className="mikeyVerticalNav__item" key={navDetails.id}>
            <h4>{navDetails.name}</h4>
            <p>{navDetails.detail}</p>
        </div>
    ))
    return ( 
        <div className="mikeyVerticalNav">
            <h3 className="mikeyVerticalNav__name">Mikey</h3>

            <div className="mikeyVerticalNav__items">
                {mappedVerticalNavDetails}
            </div>
        </div>
     );
}
 
export default MikeyVerticalNav;