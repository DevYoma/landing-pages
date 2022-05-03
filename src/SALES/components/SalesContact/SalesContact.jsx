import React from 'react'
import './SalesContact.css';
import TwitterIcon from '../../assets/twitterIcon.png'
import GoogleIcon from '../../assets/googleIcon.png'
import LinkedInIcon from '../../assets/linkedInIcon.png'

const saleContactButton ={
  // padding: "50px",
  padding: "30px",
  background: '#E3E7FD',
  borderRadius: "64.2237px", 
  display: "flex",
  alignItems: "center"
}

const imgStyle = {
  width: "86.72px", 
  height: "70.48px",
}

const SalesContactButton = ({ name, icon, link }) => (
  <button onClick={() => window.location.href=`https://${link}`} style={saleContactButton}>
     <img style={imgStyle} src={icon} alt={name} />{name}
  </button>
)

const SalesContact = () => {
  return (
      <div className="salesContact salesContainer">
          <p>Contact Info</p>
          <div className="salesContactDiv">
            {/* <SalesContactButton name="Google" link="ayodejiomonijo@gmail.com"/> */}
            <SalesContactButton icon={TwitterIcon} name="Twitter" link="twitter.com/AyodejiOmonijo1?"/>
            <SalesContactButton icon={LinkedInIcon} name="LinkedIn" link="www.linkedin.com/in/ayodeji-omonijo-735392225/" />
          </div>
          <p>Phone Number: +2349034016273</p>
      </div>
  )
}

export default SalesContact