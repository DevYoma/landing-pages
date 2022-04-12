import React from 'react';
import './MikeyBody.css';
import MikeyNav from '../MikeyNav/MikeyNav'
import MikeyHero from '../MikeyHero/MikeyHero';

const MikeyBody = () => {
    return ( 
        <div className="mikeyBody">
            {/* <h1>I am the mikey body component</h1> */}
            <MikeyNav />
            <MikeyHero />
        </div>
     );
}
 
export default MikeyBody;