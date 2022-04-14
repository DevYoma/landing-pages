import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import { FaGithub } from 'react-icons/fa'
import Pic from './assets/efficientWay.png';
import antique from './assets/antique.png'
import kamil from './assets/kamil.png'
import makilo from './assets/maliko.png'
import natasha from './assets/natasha.png'
import venissa from './assets/venissa.png'
import mathelda from './assets/mathelda.png'
import mikey from './assets/mikey.png'

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
            img: natasha,
            link: "/natasha"
        },
        {
            id: 3,
            name: "Venissa",
            img: venissa, 
            link: "/venissa"
        },
        {
            id: 4, 
            name: "Kamilia", 
            img: kamil,
            link: "/kamilia"
        },
        {
          id: 5, 
          name: "Maliko",
          img: makilo,
          link: "/maliko"
        },
        {
          id: 6, 
          name: "Mikey",
          img: mikey,
          link: '/mikey'
        },
        {
          id: 7, 
          name: "Mathelda", 
          img: mathelda,
          link: '/mathelda'
        }
    ])

    const mappedDesigns = designs.map(design => (
        <div key={design.id}>
            <div className="homeCard__top">
                <h2>{design.id}</h2> 
                <img style={{ border: '1px solid red', width: "60%", objectFit: "contain" }} src={design.img} alt="image" /> <br />
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