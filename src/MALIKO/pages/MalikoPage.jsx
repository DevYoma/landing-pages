import React from 'react';
import './MalikoPage.css';
import MalikoVerticalNav from '../Components/MalikoVerticalNav/MalikoVerticalNav'
import MalikoBody from '../Components/MalikoBody/MalikoBody'

const MalikoPage = () => {
    return ( 
        <div className="malikoPage">
            <MalikoVerticalNav />

            <MalikoBody />
        </div>
     );
}
 
export default MalikoPage;