import React from 'react';
import KamiliaNav from '../Components/KamiliaNav/KamiliaNav';
import './KamiliaPage.css';
import PinkSquare from '../assets/pinkSquare.png'
import KamiliaHero from '../Components/KamiliaHero/KamiliaHero';

const KamiliaPage = () => {
    return ( 
        <div className="kamiliaPage">
            <img src={PinkSquare} alt="pinksquare" className='kamiliaPage__pinkSquare' />
            <KamiliaNav />
            <KamiliaHero />
        </div>
     );
}
 
export default KamiliaPage;