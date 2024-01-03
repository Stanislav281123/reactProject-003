import React from "react"
import SButton from "../elements/Buttons/SecondButton"

export default function Content_001(){
    return(
        <div className="content_001">
            <h1>A Digital Product Studio<br/>that will Work</h1>
            <div className="firstBlockCont_001">
                <h4>For</h4>
                <div className="wrapper_001"><h4>Startups</h4></div>
                <h4>,</h4>
                <div className="wrapper_001"><h4>Enterprise leaders</h4></div>
                <h4>,</h4>
                <div className="wrapper_001"><h4>Media & Publishers</h4></div>
                <h4>and</h4>
                <div className="wrapper_001"><h4>Social Good</h4></div>
            </div>
            <div className="secondBlockCont_001">
                <SButton text="Our Works"/>
                <SButton text="Contact Us"/>
            </div>
            <div className="bottomLabelCont001"><h6>Trusted By 250+ Companies</h6></div>
            <div className="grayMask"></div>
            <div className="greenMask"></div>
        </div>
    )
}