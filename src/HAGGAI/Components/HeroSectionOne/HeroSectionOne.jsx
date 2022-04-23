import React from 'react'
import './HeroSectionOne.css'
import Phone from './assets/phone.png'
import Polygon from './assets/polygon.png'
import Icon1 from './assets/Icon1.svg'
import PinkCircle from './assets/pinkCircle.png'

const HeroSectionOne = ({ flexDirection, rotate }) => {
    // console.log(flexDirection)
    console.log(rotate)
    let translate;
    switch (rotate) {
        case rotate = "left":
            translate="heroSectionOne__left leftTranslate"
            break;
        case rotate = "right":
            translate="heroSectionOne__left rightTranslate"
            break;
        case rotate = "normal":
            translate = "heroSectionOne__left"
        default:
            break;
    }
  return (
    <div className={flexDirection ? 'heroSectionOne haggai__container heroSectionOne__flexDirection' : 'heroSectionOne haggai__container'}>
        <div className={translate}>
            <img src={Polygon} alt="polygon" />
            <img src={Phone} alt="phone" />
        </div>
        <div className='heroSectionOne__right'>
            <div className='heroSectionOne__rightIcon'>
                <img src={Icon1} alt="icon1" />
                <img src={PinkCircle} alt="pinkCircle" />
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