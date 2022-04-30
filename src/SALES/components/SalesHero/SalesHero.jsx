import React from 'react'
import './SalesHero.css'
import HeroImg from '../../assets/heroImage.png'
import SalesButton from '../SalesButton/SalesButton'

const SalesHero = () => {
  return (
      <div className="salesHero salesContainer">
            <div className="salesHeroLeft">
                <p>Complete Web </p>
                <p>Mobile Design Course</p>
                <p>in 2022: UI/UX, Figma</p>
                
                <div className="salesHeroLeft__miniDescription">
                    <p>Build beautifully designed web and mobile</p>
                    <p>projects for your customers using <span>FIGMA</span></p>
                </div>
                    
                <button className='salesHeroLeft__button'>
                    Pre-Order
                </button>
            </div>
          <div>
            <img src={HeroImg} alt="HeroImg" />
          </div>
      </div>
  )
}

export default SalesHero