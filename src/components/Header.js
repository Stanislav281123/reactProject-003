import React from "react"
import Logo from "../elements/Logo"
import FButton from "../elements/Buttons/FirstButton"

export default function Header(){
    return(
        <header>
            <div className="logo-block-left">
                <Logo/>
                <h4 className="rePosit-001">SauareUp</h4>
            </div>
            <ul className="menu-block">
                <li className="center menu-item menu-activ-item"><h6>Home</h6></li>
                <li className="center menu-item"><h6>Services</h6></li>
                <li className="center menu-item"><h6>Work</h6></li>
                <li className="center menu-item"><h6>Process</h6></li>
                <li className="center menu-item"><h6>About</h6></li>
                <li className="center menu-item"><h6>Career</h6></li>
            </ul>
            <FButton text="Contact Us"/>
        </header>
    )
}