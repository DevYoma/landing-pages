import React from 'react'
import './HeroSectionOne.css'
import Phone from './assets/phone.png'
import Polygon from './assets/polygon.png'
import GrayPolygon from './assets/grayPolygon.png';
import BluePolygon from './assets/bluePolygon.png';
import Icon1 from './assets/Icon1.svg'
import PinkCircle from './assets/pinkCircle.png'
import Icon2 from './assets/Icon2.svg';
import GrayCircle from './assets/grayCircle.png';
import Icon3 from './assets/Icon3.svg';
import BlueCircle from './assets/blueCircle.png';


const HeroSectionOne = ({ flexDirection, rotate, image, icon }) => {

    let iconObject = {
        iconSrc: null,
        backgroundSrc: null
    };
    switch (icon) {
        case icon = 1:
            iconObject = {
                iconSrc: Icon1,
                backgroundSrc: PinkCircle
            }
            break;
        case icon = 2:
            iconObject = {
                iconSrc: Icon2,
                backgroundSrc: GrayCircle
            }
            break;
        case icon = 3:
            iconObject = {
                iconSrc: Icon3,
                backgroundSrc: BlueCircle
            }
            break;
    
        default:
            break;
    }

    let imageColor;
    switch (image) {
        case image = "pink":
            imageColor=Polygon
            break;
        case image = "gray":
            imageColor = GrayPolygon
            break;
        case image = 'blue':
            imageColor = BluePolygon
        default:
            break;
    }

    let translate;
    switch (rotate) {
        case rotate = "left":
            translate="heroSectionOne__left leftTranslate"
            break;
        case rotate = "right":
            translate="heroSectionOne__left rightTranslate"
            break;
        case rotate = "normal":
            translate = "heroSectionOne__left";
            break;
        default:
            break;
    }


  return (
    <div className={flexDirection ? 'heroSectionOne haggai__container heroSectionOne__flexDirection' : 'heroSectionOne haggai__container'}>
        <div className={translate}>
            {<img src={imageColor} alt="polygon" />}
            <img src={Phone} alt="phone" />
        </div>
        <div className='heroSectionOne__right'>
            <div className='heroSectionOne__rightIcon'>
                <img src={iconObject.iconSrc} alt="icon1" />
                <img src={iconObject.backgroundSrc} alt="pinkCircle" />
            </div>

            <div className="heroSectionOne__rightHeading">
                <p>Tortor aenean</p>
                <p>aenean facilisis mauris</p>
            </div>

            <div className="heroSectionOne__rightText">
                <p>Consequat est morbi ut diam convallis cras </p>
                <p>nulla enim. Netus justo, in egestas nec libero</p>
                <p>vitae diam at venenatis.</p>
            </div>
        </div>
    </div>
  )
}

export default HeroSectionOne