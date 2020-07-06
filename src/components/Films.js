import React, {Component} from "react";

class Films extends Components {
    render(){
        return (
            <div className="film">
                <h3>{this.props.children}</h3>
                <p>{this.props.name}</p>
            </div>
        )
    }
}