import React from "react";
import IconBlock from "./IconBlock";

export default class TypeBlock_002 extends React.Component{
    render(){
        return(
            <div className="typeBlock_002">
                <div className="topTypeBlock_002">
                    <IconBlock image={this.props.image}/>
                    <div className="miniTitleFont_002">{this.props.title}</div>
                </div>
                <h5>{this.props.text}</h5>
            </div>
        )
    }
}
