import React from "react";
import TypeBlock_001 from "../elements/TypeBlock_001";
import image1 from "../images/Icon1.svg";
import image2 from "../images/Icon2.svg";
import image3 from "../images/Icon3.svg";

export default class Content_003 extends React.Component{
    render(){
        return(
            <div className="content_003">
                <div className="topBlock_003">
                    <h2 className="zIn2">Our Services</h2>
                    <h6 className="zIn2">Transform your brand with our innovative digital solutions that captivate and engage your audience.</h6>
                    <div className="sGrayMaskTopBlock"></div>
                    <div className="greenMaskTopBlock bgImgTopBlock_003"></div>
                    <div className="grayMaskTopBlock"></div>
                </div>
                <div className="bottomBlock_003">
                    <TypeBlock_001 image={image1} title="Design" text="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."/>
                    <TypeBlock_001 image={image2} title="Engineering" text="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."/>
                    <TypeBlock_001 image={image3} title="Project Management" text="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."/>
                </div>
            </div>
        );
    }
}




