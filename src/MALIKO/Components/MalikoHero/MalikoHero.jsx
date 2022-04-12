import React from 'react';
import './MalikoHero.css';
import Dog from '../../assets/Dog.png';
import MalikoHeroImg from '../../assets/malikoHeroImg.png'
import MalikoDotImg from '../../assets/malikoDotImg.png'

const MalikoHero = () => {
    return ( 
        <div className="malikoHero">
            <div className="malikoHero__left">
                <div className="malikoHero__leftName">
                    <p>Hello World, I am</p>
                    <img src={MalikoHeroImg} alt="hero_img" />
                    <img src={MalikoDotImg} alt="dot_img" />
                </div>

                <div className="malikoHero__leftDescription">
                    <p>From they fine john he give of rich he. They age and draw mrs like.</p>
                    <p> Improving end distrusts may instantly was household applauded</p>
                    <p>incommode.</p>
                </div>

                <button className="malikoHero__button">
                    schedule free consultation
                </button>

                <div className="malikoHero__bottomText">
                    <p>Note, This is my dog, not me</p>
                </div>
            </div>

            <div className="malikoHero__right">
                <img src={Dog} alt="dog" />
            </div>
        </div>
     );
}
 
export default MalikoHero;