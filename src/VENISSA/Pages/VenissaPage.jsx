import React from 'react';
import './VenissaPage.css'
import VenissaVerticalNav from '../Components/VenissaVerticalNav/VenissaVerticalNav';
import VenissaBody from '../Components/VenissaBody/VenissaBody'


const VenissaPage = () => {
    return ( 
        <div className='venissaPage'>
           <VenissaVerticalNav />

           <VenissaBody />
        </div>
     );
}
 
export default VenissaPage;