import React from 'react'
import './SalesContact.css';
import TwitterIcon from '../../assets/twitterIcon.png'
import LinkedInIcon from '../../assets/linkedInIcon.png'
import Gmail from '../../assets/gmail.png'
import Phone from '../../assets/Phone.png'


const SalesContact = () => {
  const contactObjects = [
    {
      id: 1, 
      name: "Gmail",
      link: "",
      icon: Gmail
    },
    {
      id: 2, 
      name: "Twitter",
      link: "", 
      icon: TwitterIcon
    },
    {
      id: 3, 
      name: "LinkedIn",
      link: "",
      icon: LinkedInIcon
    }
  ]
  
  return (
      <div className="salesContact salesContainer">
          <p>Contact Info</p>
          <div className="salesContact__links">
            {
              contactObjects.map((contactItem) => (
                <div className="salesContact__link" key={contactItem.id}>
                  <img src={contactItem.icon} alt={contactItem.name} /> <span><a href="">{contactItem.name}</a> </span>
                </div>
              ))
            }
          </div>
          <p className='salesContact__2ndParagraph'> <img src={Phone} alt="phone" /> +2349034016273</p>
      </div>
  )
}

export default SalesContact