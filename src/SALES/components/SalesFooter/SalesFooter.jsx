import React from 'react'
import './SalesFooter.css'
import Deji from '../../assets/Deji.png'

const SalesFooter = () => {
  return (
      <div className="salesFooter salesContainer">
          <div>
              <img src={Deji} alt="deji" />
          </div>
          <div className='salesFooter__description'>
            <div className="salesFooter__descriptionHeading">
                <h2>Ayodeji Omonijo</h2>
                <span>UX Educator</span>
            </div>

            <p>With more than 2years in the design industry, Ayodeji Omonijo has taught over 200 students in both free classes and paid mentorships. </p>
          </div>
      </div>
  )
}

export default SalesFooter