import React from 'react';
import MalikoNav from '../MalikoNav/MalikoNav'
import MalikoHero from '../MalikoHero/MalikoHero'
import './MalikoBody.css';

const MalikoBody = () => {
    return ( 
        <div className="malikoBody">
            {/* Maliko body */}
            <MalikoNav />

            <MalikoHero />
        </div>
     );
}
 
export default MalikoBody;