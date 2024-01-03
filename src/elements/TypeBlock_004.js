import React from "react";

export default class TypeBlock_004 extends React.Component{
    render(){
        return(
            <div className="typeBlock_004">
                <button className="numTypeBlock_004"><h3>{this.props.num}</h3></button>
                <div className="contTypeBlock_004">
                    <div className="rightTypeBlock_004">
                        <h4 className="wid520px">{this.props.title}</h4>
                        <button className="actButTypeBlock_004"></button>
                    </div>
                    <h6>{this.props.text}</h6>
                </div>
            </div>
        )
    }
}