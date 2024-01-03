import React from "react";
import IconBlock from "./IconBlock";

export default class TypeBlock_001 extends React.Component{
    render(){
        return(
            <div className="typeBlock_001">
                <IconBlock image={this.props.image}/>
                <div className="miniTitleFont">{this.props.title}</div>
                <h6>{this.props.text}</h6>
                <button className="tb1Button">Learn More</button>
            </div>
        )
    }
}