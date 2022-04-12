import React, { useState } from 'react';
import './MikeyHero.css'
import MikeyHeroImage from '../../assets/MikeyHeroImg.png';
import Picture1 from '../../assets/MikeyPicture1.png'
import Picture2 from '../../assets/MikeyPicture2.png'
import Picture3 from '../../assets/MikeyPicture3.png'
import Picture4 from '../../assets/MikeyPicture4.png'
import { BsTelephone } from 'react-icons/bs'

const MikeyHero = () => {
    const [pictures] = useState([
        {
            id:1,
            image: Picture1
        },
        {
            id:2,
            image: Picture2
        },
        {
            id:3,
            image: Picture3
        },
        {
            id:4,
            image: Picture4
        },
    ])

    const mappedPictures = pictures.map(picture => (
      <img src={picture.image} alt=""  key={picture.id}/>
    ))

    return ( 
        <div className="mikeyHero">
            <div className="mikeyHero__left">
                <img src={MikeyHeroImage} alt="yo" />
            </div>

            <div className="mikeyHero__right">
                <div className="mikeyHero__rightDescription">
                    <h4>Hey There,</h4>
                    <h1>I am Mikey</h1>
                    <p>I design websites and apps</p>
                    <span>But i also code them from scratch</span>
                </div>
                
                <button className="mikeyHero__rightButton">
                     <BsTelephone /> Schedule a Call
                </button>

                <div className="mikeyHero__latestWork">
                    <p>Latest Work</p>

                    <div className="mikeyHero__latestWorkList">
                        {mappedPictures}
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default MikeyHero;