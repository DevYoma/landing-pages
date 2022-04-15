import React from 'react';
import './VenissaBody.css'
import VenissaNav from '../VenissaNav/VenissaNav'
import VenissaHero from '../VenissaHero/VenissaHero';
import VenissaFooter from '../VenissaFooter/VenissaFooter';
import useWindowDimensions from '../../../Hooks/useWindowDimensions'

const VenissaBody = () => {
    const { width } = useWindowDimensions();
    // const number = width < 1370
    return ( 
        <div className="venissaBody">
            <VenissaNav />
            
            <VenissaHero />
        </div>
     );
}
 
export default VenissaBody;