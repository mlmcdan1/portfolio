import React, { useState } from "react"
import "./header.css"
import logo from "../pic/bitme.jpg"

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
    })

    const [Mobile, setMobile] = useState(false)
    return (
        <>
        <header className='header'>
            <div className='container d_flex'>
                <div>
                    <img className='logo' src= {logo} alt='myBitmoji'/>
                </div>

                <div className='navlink'>
                <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='#contact'>contact</a>
                    </li>
                    <li>
                        <a href='../../Files/MResume.pdf'download className="action_btn">Resume</a>
                    </li>
                </ul>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
