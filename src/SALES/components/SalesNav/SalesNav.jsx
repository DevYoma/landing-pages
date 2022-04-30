import React from 'react'
import './SalesNav.css';
import SalesButton from '../../components/SalesButton/SalesButton'

const SalesNav = () => {
  return (
      <nav className="salesNav salesContainer">
          <div>
              <p>Learn UI/UX with</p>
              <p>Ayodeji Omonijo</p>
          </div>

          <SalesButton />
      </nav>
  )
}

export default SalesNav