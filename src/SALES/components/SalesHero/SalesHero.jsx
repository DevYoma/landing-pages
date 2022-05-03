import React from 'react'
import './SalesHero.css'
import HeroImg from '../../assets/heroImage.png'

const SalesHero = () => {

  const handleClick = () => {
    window.location.href="https://paystack.com/pay/learnwithayodejiomonijo"
  }
  return (
      <div className="salesHero salesContainer">
            <div className="salesHeroLeft">
                <p>Complete Web &amp;</p>
                <p>Mobile Design Course</p>
                <p>in 2022: UI/UX, Figma</p>
                
                <div className="salesHeroLeft__miniDescription">
                    <p>Build beautifully designed web and mobile</p>
                    <p>projects for your customers using <span>FIGMA</span></p>
                </div>
                    
                <div className='salesHeroLeft__div'>
                  <button className='salesHeroLeft__button' onClick={handleClick}>
                      Pre-Order
                  </button>
                  <div className="pricing">
                    <p className="pricing1">&#8358;10,000</p>
                    <p className="pricing2">&#8358;15,000</p>
                  </div>
                </div>
            </div>
          <div>
            <img src={HeroImg} alt="HeroImg" />
          </div>
      </div>
  )
}

export default SalesHero