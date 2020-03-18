import React from 'react'
import '../App.css'

function Footer() {
    return (
        <header className="footer">
            <div className="social">
                <a href="https://www.linkedin.com/in/zhuamanda/" target="_blank">LinkedIn</a>
            </div>
            <div className="divider">
                ||
            </div>
            <div className="social">
                <a href="mailto: amandazhu9810@gmail.com" target="_blank">Email</a>
            </div>
            <div className="divider">
                ||
            </div>
            <div className="social">
                <a href="https://github.com/azhu98" target="_blank">GitHub</a>
            </div>
            <div className="footer-copyright">
                Amanda Zhu 2020 © <br/ >
                🍵 + ❤️ + ⚛️ Made with 
            </div>
        </header>
       
    )
}

export default Footer