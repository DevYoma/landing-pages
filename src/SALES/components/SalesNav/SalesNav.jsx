import React from 'react'
import './SalesNav.css';
import SalesButton from '../../components/SalesButton/SalesButton'
import Pricing from '../../miniComponent/Pricing/Pricing';
import '../../miniComponent/Pricing/Pricing.css'

const SalesNav = () => {
  return (
      <nav className="salesNav salesContainer">
          <div>
              <p>Learn UI/UX with</p>
              <p>Ayodeji Omonijo</p>
          </div>
            <Pricing />
          <SalesButton />
      </nav>
  )
}

export default SalesNav