import React from 'react';
import './VenissaVerticalNav.css';
import VerticalNavLogo from '../../assets/VerticalLogo.png';
import {BsTwitter} from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';
import { BsBehance } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const VenissaVerticalNav = () => {
    return ( 
        <div className="venissaVerticalNav">
            <img src={VerticalNavLogo} alt="verticalLogo" />

            <div className='venissaVerticalNav__icons'>
                <BsTwitter />
                <BsLinkedin />
                <BsVimeo />
                <BsBehance />
                <BsInstagram />
            </div>
        </div>
     );
}
 
export default VenissaVerticalNav;