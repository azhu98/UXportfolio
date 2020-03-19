import React from 'react'
import '../App.css'
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"

function Footer() {
    return (
        <header className="footer">
            <ScrollUpButton style={{backgroundColor: "transparent", fill: "#FF8F00"}}/>
            <div className="social">
                <a href="https://www.linkedin.com/in/zhuamanda/" target="_blank">LinkedIn</a>    ||    <a href="mailto: amandazhu9810@gmail.com" target="_blank">Email</a>    ||    <a href="https://github.com/azhu98" target="_blank">GitHub</a>
            </div>
     
            <div className="footer-deco">
            <div className="copyright">
            © Amanda Zhu 2020     
            </div>
            <div className="made-with">
            Made with  ⚛️ + 🧡 + 🍵  
            </div>
            </div>

        </header>
       
    )
}

export default Footer