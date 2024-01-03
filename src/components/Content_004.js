import React from "react";
import TypeBlock_002 from "../elements/TypeBlock_002";
import image4 from "../images/Icon4.svg"
import image5 from "../images/Icon5.svg"
import image6 from "../images/Icon6.svg"
import image7 from "../images/Icon7.svg"

export default class Content_004 extends React.Component{
    render(){
        return(
            <div className="content_004">
                <div className="topBlock_004">
                    <h2 className="zIn2">Why Choose SquareUp?</h2>
                    <h6 className="zIn2">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</h6>
                    <div className="sGrayMaskTopBlock"></div>
                    <div className="grayMaskTopBlock"></div>
                    <div className="greenMaskTopBlock bgImgTopBlock_004"></div>
                </div>
                <div className="botBlock_004">
                    <TypeBlock_002 image={image4} title={"Expertise"} text={"Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."}/>
                    <TypeBlock_002 image={image5} title={"Client-Centric Approach"} text={"We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."}/>
                    <TypeBlock_002 image={image6} title={"Resuilt-Driven Solution"} text={"Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."}/>
                    <TypeBlock_002 image={image7} title={"Collaborative Partnership"} text={"We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."}/>
                </div>
            </div>
        )
    }
}