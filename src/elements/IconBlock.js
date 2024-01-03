import React from "react";

export default class IconBlock extends React.Component{
    render(){
        return(
            <div className="iconBlock">
                <img src={this.props.image}/>
            </div>
        )
    }
}