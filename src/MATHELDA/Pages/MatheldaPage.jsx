import React from 'react';
import MatheldaBody from '../Components/MatheldaBody/MatheldaBody';
import MatheldaVerticalNav from '../Components/MatheldaVerticalNav/MatheldaVerticalNav';
import './MatheldaPage.css';

const MatheldaPage = () => {
    return ( 
        <div className="matheldaPage">
            <MatheldaVerticalNav />
            <MatheldaBody />
        </div>
     );
}
 
export default MatheldaPage;