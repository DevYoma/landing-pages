import React from 'react'
import './SalesButton.css';
import { paymentLink } from '../../utils'

const SalesButton = () => {
  console.log(paymentLink)
  const handleClick = () => {
    // window.location.href="https://paystack.com/pay/learnwithayodejiomonijo"
    window.location.href=`${paymentLink}`
  }
  return (
    <button onClick={handleClick} className='salesNav__button'>
        Buy Now
    </button>
  )
}

export default SalesButton