import React, {Component} from "react";

class Film extends Component {
    render(){
        return (
            <div className="film">
                <h3>{this.props.children}</h3>
                <p>&bull;{this.props.name}</p>
            </div>
        )
    }
}

export default Film;