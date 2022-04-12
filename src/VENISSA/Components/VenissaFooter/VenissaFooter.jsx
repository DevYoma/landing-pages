import React from 'react';
import './VenissaFooter.css';

const VenissaFooter = () => {
    const footerDetails = [
        {
            id:1 ,
            subject: "Email",
            data: "venissa@gotham.com"
        },
        {
            id: 2,
            subject: "Phone",
            data: "+190-300-444-5555"
        },
        {
            id: 3,
            subject: "Location",
            data: "Gotham City, Arkham"
        }
    ]

    const mappedFooterDetails = footerDetails.map(footerDetail => (
        <div key={footerDetail.id} className='venissaFooter__mappedList'>
            <h3>{footerDetail.subject}</h3>
            <p>{footerDetail.data}</p>
        </div>
    ))
    return ( 
        <div className="venissaFooter">
            {mappedFooterDetails}
        </div>
     );
}
 
export default VenissaFooter;