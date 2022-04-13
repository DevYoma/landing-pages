import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import { FaGithub } from 'react-icons/fa'
import Pic from './assets/efficientWay.png';
import antique from './assets/antique.png'

const Home = () => {
    const [designs] = useState([
        {
            id: 1,
            name: "Antique",
            img: antique,
            link: "/antique"
        },
        {
            id: 2, 
            name: "Natasha",
            img: Pic,
            link: "/natasha"
        },
        {
            id: 3,
            name: "Venissa",
            img: Pic, 
            link: "/venissa"
        },
        {
            id: 4, 
            name: "Kamilia", 
            img: Pic,
            link: "/kamilia"
        },
    ])

    const mappedDesigns = designs.map(design => (
        <div key={design.id}>
            <div className="homeCard__top">
                <h2>{design.id}</h2> 
                <img style={{ border: '1px solid red', width: "800px", height: "500px", objectFit: "" }} src={design.img} alt="image" />
                <Link to={design.link}>{design.name}</Link>
            </div>
        </div>
    ))

    
  return (
    <div className='home'>
         <h1>Welcome to this page</h1>
        <p>Built by <a href="https://devyoma.netlify.app"  target="_blank">Yoma</a> </p>
        <p>You can check the repository here 
        <a href="https://github.com/devyoma/landing-pages" target='_blank'>Github</a>    
        </p>  

        <h3>My Reasons for Building this</h3>
        <ul>
            <li>To improve my CSS Skills</li>
            <li>To get better at translating designs</li>
            <li>To help and motivate developers just getting started into tech as you can read through the code base...</li>
            <li>To solidify my React JS ⚛️ skills </li>
        </ul>

        <p style={{ fontWeight: "bold" }}>Special thanks to TENOTEA, he has been really helpful</p>

        <h1>Designs</h1>

        {mappedDesigns}
{/*          
                <Link to="/antique">Antique Page Design</Link><br />
                <Link to="/natasha">Natasha Page Design</Link><br />
                <Link to="/venissa"> 
                  Venissa Page Design
                </Link> <br />
                <Link to='/kamilia'>
                  Kamilia Page Design
                </Link> <br />
                <Link to='/maliko'>
                  Maliko Page Design
                </Link> <br />
                <Link to="/mikey">  
                  Mikey Page Design
                </Link> <br />
                <Link to='/mathelda'>
                  Mathelda Page Design
                </Link> <br />
                <Link to='/scrimba'>
                  Scrimba Animation Course
                </Link>
                 */}

                {/* <TwitterLink /> */}
    </div>
  )
}

export default Home