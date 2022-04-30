import React from 'react'
import './SalesButton.css';

const SalesButton = () => {
  const handleClick = () => {
    window.location.href="https://devyoma.netlify.app"
  }
  return (
    <button onClick={handleClick} className='salesNav__button'>
        Pre-Order
    </button>
  )
}

export default SalesButton