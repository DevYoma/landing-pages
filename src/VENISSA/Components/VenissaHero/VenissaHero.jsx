import React from 'react';
import './VenissaHero.css';
import HeroImg from '../../assets/HeroImg.png'
import VenissaFooter from '../VenissaFooter/VenissaFooter';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';

const VenissaHero = () => {
    const { width } = useWindowDimensions()
    const numberWidth = width < 1300
    return ( 
        <React.Fragment>
            <div className="venissaHero">
                <div className="venissaHero__left">
                    <div>
                        <p>Hi There,</p>
                        <h1>I am Ven<span style={{ color: "#F1214F" }}>i</span>ssa</h1>
                        <h3>I am a designer during the daytime</h3>
                        <h4>& work with batman during the nights.</h4>
                    </div>

                    <button className='venissaHero__button'>
                        Ask Me How
                    </button>

                </div>

                <div className="venissaHero__right">
                    <img src={HeroImg} alt="heroImg" />
                </div>
            </div>
           
            {!numberWidth && (<VenissaFooter />)}
        </React.Fragment>
     );
}
 
export default VenissaHero;