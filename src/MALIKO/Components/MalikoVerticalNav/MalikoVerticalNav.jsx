import React from 'react';
import './MalikoVerticalNav.css';
import MalikoImg from '../../assets/malikoImg.png'
import useWindowDimensions from '../../../Hooks/useWindowDimensions'

const MalikoVerticalNav = () => {
    const { width } = useWindowDimensions()
    const number = width >= 768
    return ( 
        <div className="malikoVerticalNav">
            {/* <h3>maliko</h3> */}
            {number && <img src={MalikoImg} alt="maliko" />}

            <div className='malikoVerticalNav__items'>
                <p>materials</p>
                <p>designs</p>
                <p>process</p>
            </div>

            <div className='malikoVerticalNav__footer'>
                <p>fb</p>
                <p>pi</p>
                <p>in</p>
            </div>

        </div>
     );
}
 
export default MalikoVerticalNav;