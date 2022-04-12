import React from 'react';
import './MikeyPage.css'
import MikeyBody from '../Components/MikeyBody/MikeyBody';
import MikeyVerticalNav from '../Components/MikeyVerticalNav/MikeyVerticalNav';

const MikeyPage = () => {
    return ( 
        <div className="mikeyPage">
            <MikeyVerticalNav />
            <MikeyBody />
        </div>
     );
}
 
export default MikeyPage;