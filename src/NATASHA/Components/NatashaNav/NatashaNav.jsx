import React, { useState, useEffect } from 'react';
import './NatashaNav.css';
// import TwitterIcon from '@mui/icons-material/Twitter';
import { FaBeer } from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';
import { BsBehance } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


const NatashaNav = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    return ( 
        <div className={click ? "null" : "natashaNav container"}>
            <div className="natashaNav__name">
                natasha.
            </div>

            <ul className="natashaNav__middle">
                <li id="natashaNav1" onClick={() => setClick(!click)}>portfolio</li>
                <li onClick={() => setClick(!click)}>about me</li>
                <li onClick={() => setClick(!click)}>my blog</li>
                <li onClick={() => setClick(!click)}>reviews</li>
                <li onClick={() => setClick(!click)}>contact me</li>
            </ul>

            <div className='natashaNav__icons'>
                {/* <TwitterIcon /> */}
                <BsTwitter />
                <BsInstagram />
                <BsVimeo />
                <BsBehance />
                <BsLinkedin />
                
            </div>

            <div 
                className='natashaNav__mobileIcon'
                onClick={() => setClick(!click)}
            >
                {click ? "X" : "O"}
            </div>
        </div>
     );
}
 
export default NatashaNav;