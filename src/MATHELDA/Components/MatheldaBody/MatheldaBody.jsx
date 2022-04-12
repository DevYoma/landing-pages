import React from 'react';
import MatheldaHero from '../MatheldaHero/MatheldaHero';
import MatheldaHeroFooter from '../MatheldaHeroFooter/MatheldaHeroFooter';
import MatheldaNav from '../MatheldaNav/MatheldaNav';
import './MatheldaBody.css';

const MatheldaBody = () => {
    return ( 
        <div className="matheldaBody">
            <MatheldaNav />

            <MatheldaHero />

            <MatheldaHeroFooter />
        </div>
     );
}
 
export default MatheldaBody;