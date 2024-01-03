import React from "react";
import ThirdButton from "./Buttons/ThirdButton";

export default class TypeBlock_003 extends React.Component{
    render(){
        return(
            <div className="typeBlock_003">
                <h3 className="greenText">{this.props.title}</h3>
                <h6>{this.props.text}</h6>
                <div className="botTypeBlock_003">
                    <div className="leftBotTypeBlock_003">
                        <img className="imgBotTypeBlock_003" src={this.props.image}/>
                        <div className="centBotTypeBlock_003">
                            <h5>{this.props.fullName}</h5>
                            <h6>{this.props.comment}</h6>
                        </div>
                    </div>
                    <ThirdButton />
                </div>
            </div>
        )
    }
}