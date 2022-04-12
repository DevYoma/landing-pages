import React, { useState } from 'react';
import './KamiliaHero.css';
import KamiliaHeroImg from '../../assets/KamiliaHeroImg.png'
import Work from '../../assets/work.png'
import Nainee from '../../assets/nainee.png'
import Hoodie from '../../assets/hoodie.png'

const KamiliaHero = () => {
    const [images] = useState([
        {
            id: 1,
            pic: Work
        }, 
        {
            id: 2,
            pic: Nainee
        }, 
        {
            id: 3, 
            pic: Hoodie
        }
    ])

    const mappedImages = images.map((image) => (
        <div className="kimiliaHero__image" key={image.id}>
            <img src={image.pic} alt="latest pic" />
        </div>
    ))

    return ( 
        <div className="kamiliaHero container">
            <div className="kamiliaHero__left">
                <p className='kimiliaHero__leftParagraph'>HELLO THERE, NICE TO MEET YOU ❣️, I AM</p>
                <span>kamilia</span>
                <div className="kamiliaHero__description">
                    <p>Whether article spirits new her covered hastily sitting</p>
                    <p>her. Money witty books nor son add. Chicken age had</p>
                    <p>evening believe but proceed pretend mrs.</p>
                </div>

                <button className="kamiliaHero__button">
                    schedule a call
                </button>

                <div className="kamiliaHero__latestWork">
                    <h1>Latest Work</h1>

                    <div className="kimiliaHero__images">
                        {mappedImages}
                    </div>
                </div>

                <p className="kamiliaHero__viewAll">
                    view all
                </p>
            </div>

            <div className="kamiliaHero__right">
                <span>
                    <p>my process</p>
                    <p>clients review</p>
                    <p>download cv</p>
                </span>
                <img src={KamiliaHeroImg} alt="KamiliaImg" style={{height:"880px"}}/>
            </div>

        </div>
     );
}
 
export default KamiliaHero;