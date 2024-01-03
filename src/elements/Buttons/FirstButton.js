import React from "react";

export default class FButton extends React.Component {
    render(){
        return(
            <button className="firstBut">{this.props.text}</button>
        )
    }
}