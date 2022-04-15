import React, { useState, useEffect } from 'react';
import './NatashaNav.css';
import {BsTwitter} from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';
import { BsBehance } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg'



const NatashaNav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        // alert('Working')
        setClick(!click)
    }
    return ( 
        <div className="natashaNav container">
            <div className="natashaNav__name">
                natasha.
            </div>

            <ul className="natashaNav__middle" id={click ? "natasha__hidden" : ""}>
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

            <CgMenuRight 
                className='natashaNav__mobileIcon'
                onClick={handleClick}
            />
        </div>
     );
}
 
export default NatashaNav;