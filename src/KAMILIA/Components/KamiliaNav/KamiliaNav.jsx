import React from 'react';
import './KamiliaNav.css';
import {BsTwitter} from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';
import { BsBehance } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const KamiliaNav = () => {
    return ( 
        <nav className="kamiliaNav container">
            <p className="kamiliaNav__name">kamilia.</p>

            <ul className="kamiliaNav__navLinks">
                <li>porfolio</li>
                <li>about me</li>
                <li>my blog</li>
                <li>reviews</li>
                <li>contact me</li>
            </ul>

            <div className="kamiliaNav__icons">
                <BsTwitter />
                <BsLinkedin />
                <BsVimeo />
                <BsBehance />
                <BsInstagram />
            </div>
        </nav>
     );
}
 
export default KamiliaNav;