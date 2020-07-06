import React, {Component} from "react";
import FilmList from "../components/FilmList";

class FilmBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            films: [
                {
                    id: 1,
                    name: "Spider-Man: Into the Spider-Verse",
                    url: "http://www.imdb.com/title/tt4633694/?ref_=rlm"
                }
            ]
        }
    }
    render(){
        return(
            <div className="film-box">
                <h2>Film list:</h2>
                <FilmList films={this.state.films}/>
            </div>
        );
    }
}

export default FilmBox;