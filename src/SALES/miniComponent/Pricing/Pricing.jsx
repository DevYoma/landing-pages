import React from 'react'
import './Pricing.css';
import salesUseWidth from '../../Hooks/salesUseWidth';

const removePricing = {
  
}

const pricing1 = {
  fontWeight: "600",
  fontSize: "34.2314px",
  lineHeight: "41px",
  color: '#101A50'

}

const pricing2 = {
  fontWeight: "600",
  fontSize: "27.3851px",
  lineHeight: "33px",
  // color: "#101A50",
  color: "#F70303",
  textDecorationLine: "line-through"
}

const Pricing = () => {
  let removePricing = {}
  const { width } = salesUseWidth();
  const showPricing = width < 769;
  
  // console.log(showPricing)
  if(showPricing){
    removePricing = {
      display: "none"
    }
  }
  return (
      <div className="pricing" style={removePricing}>
          <p className="pricing1" style={pricing1}>&#8358;15,000</p>
          <p className="pricing" style={pricing2}>&#8358;20,000</p>
      </div>
  )
}

export default Pricing