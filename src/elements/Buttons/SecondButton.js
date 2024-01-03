import React from "react";

export default class SecondBut extends React.Component{
    render(){
        return(
            <button className="secondBut">{this.props.text}</button>
        )
    }
}