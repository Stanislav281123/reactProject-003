import React from "react";
import TypeBlock_003 from "../elements/TypeBlock_003";
import image1 from "../images/Profile1.png";
import image2 from "../images/Profile2.png";
import image3 from "../images/Profile3.png";
import image4 from "../images/Profile4.png";
import image5 from "../images/Profile5.png";
import image6 from "../images/Profile6.png";

export default class Content_005 extends React.Component{
    render(){
        return(
            <div className="content_005">
                <div className="topBlock_005">
                    <h2 className="zIn2">What our Clients say Abot us</h2>
                    <h6 className="zIn2">At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what<br/> some of our satisfied clients have to say about their experience working with us</h6>
                    <div className="sGrayMaskTopBlock"></div>
                    <div className="grayMaskTopBlock"></div>
                    <div className="greenMaskTopBlock bgImgTopBlock_005"></div>
                </div>
                <div className="botBlock_005">
                    <TypeBlock_003 image={image1} title={"SquareUp has been Instrumental in Transforming our Online Presence. "} text={"Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier."} fullName={"John Smith"} comment={"CEO of Chic Boutique"}/>
                    <TypeBlock_003 image={image2} title={"Working with SquareUp was a breeze."} text={"They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend."} fullName={"Sarah Johnson"} comment={"Founder of HungryBites"} />
                    <TypeBlock_003 image={image3} title={"SquareUp developed a comprehensive booking and reservation system for our event management company"} text={"Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences."} fullName={"Mark Thompson"} comment={"CEO of EventMasters"} />
                    <TypeBlock_003 image={image4} title={"ProTech Solutions turned to SquareUp to automate our workflow"} text={"They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner."} fullName={"Laura Adams"} comment={"COO of ProTech Solution"} />
                    <TypeBlock_003 image={image5} title={"SquareUp designed and developed a captivating web portal for showcasing our real estate listings."} text={"The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched."} fullName={"Michael Anderson"} comment={"Founer of Dream Homes Realty"} />
                    <TypeBlock_003 image={image6} title={"FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans."} text={"SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs."} fullName={"Emily Turner"} comment={"CEO of FitLife Tracker"} />
                </div>
            </div>
        )
    }
}