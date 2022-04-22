import React from 'react'
import './HeroSectionOne.css'
import Phone from './assets/phone.png'
import Polygon from './assets/polygon.png'
import Icon1 from './assets/Icon1.svg'

const HeroSectionOne = () => {
  return (
    <div className='heroSectionOne haggai__container'>
        <div className='heroSectionOne__left'>
            <img src={Polygon} alt="polygon" />
            <img src={Phone} alt="phone" />
        </div>
        <div className='heroSectionOne__right'>
            <div className='heroSectionOne__rightIcon'>
                {/* <img src={Icon1} alt="icon1" /> */}
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