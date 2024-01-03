import React from "react"
import logo1 from "../images/Logo1.svg"
import logo2 from "../images/Logo2.svg"
import logo3 from "../images/Logo3.svg"
import logo4 from "../images/Logo4.svg"
import logo5 from "../images/Logo5.svg"
import logo6 from "../images/Logo6.svg"

export default function Content_002(){
    return(
        <div className="content_002">
            <div className="brandBlockCont2">
                <img src={logo1}/>
            </div>
            <div className="brandBlockCont2">
                <img src={logo2}/>
            </div>
            <div className="brandBlockCont2">
                <img src={logo3}/>
            </div>
            <div className="brandBlockCont2">
                <img src={logo4}/>
            </div>
            <div className="brandBlockCont2">
                <img src={logo5}/>
            </div>
            <div className="brandBlockCont2">
                <img src={logo6}/>
            </div>
        </div>
    )
}