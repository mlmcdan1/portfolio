import React from "react"
import "./Home.css"
import { Typewriter } from "react-simple-typewriter"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from "@fortawesome/free-brands-svg-icons"


import hero from '../pic/bitme.jpg'

const Home =() => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
            <div className='left top'>

                <h3>Welcome to my World!</h3>

                <h1>
                    Hi, I'm <span>Matthew McDaniel</span> 
                </h1>

                <h2>
                    a 
                    <span>
                    <Typewriter words={[' Professional Coder. ', ' Web Developer']} loop={5} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
                    </span>
                </h2>
                <div data-aos="fade-up"
                    data-aos-duration="3000">
                <p>  
                Full stack web developer leveraging a background in sales and customer service to deliver client satisfaction through leadership and technical knowledge. <br></br>
                     I recently earned a certificate in full-stack development from Michigan State University, enhancing my skills in responsive web design, Javascript, React.js, Node.js, and MySQL. <br></br>
                     Collaborated on projects with one being a real-world full-stack application that allows users to add/delete their personal health goals and also track their BMIs.<br></br> 
                     I am passionate about coding because I can create something useful that benefits people daily and affects their life. <br></br>
                     My educational background in technology and passion for solving problems would make me a solid addition to any organization.
                </p>
                </div>
               

                

                <div className='d_flex image_flex'>
                

                <div className='center'>
                    <div className='center_img'>
                        <img src={hero} alt='myBitmoji'/>
                    </div>
                </div>

                <div className='socials image_socials'>
                <h4 className="findme">Find Me On Social Media</h4>
                    <div className="col_1 singleCol social-media-icons-white d-flex justify-content-evenly ">
                        
                        <div className='button'>
                        <a href="https://www.youtube.com/channel/UCVqB4izmeN2cuCFlpHY2FcQ">
                        <button className='btn_shadow' >
                            <FontAwesomeIcon className="youtube" icon={faYoutube}/>
                        </button>
                        </a>

                        <a href="https://twitter.com/Mlmcdanieliv">
                        <button className='btn_shadow'>
                            <FontAwesomeIcon className="twitter" icon={faTwitter}/>
                        </button>
                        </a>

                        <a href="https://www.linkedin.com/in/matthewlmcdanieliv/">
                        <button className='btn_shadow'>
                            <FontAwesomeIcon className="linkedin" icon={faLinkedin}/>
                        </button>
                        </a>
                        </div>
                        </div>
                </div>
                </div>
            </div>
            </div>

      </section>
    </>
  )
}

export default Home
