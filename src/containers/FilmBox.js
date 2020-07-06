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
                },
                {
                    id: 2,
                    name: "Life Itself",
        
                }

            ]
        }
    }
    render(){
        return(
            <div className="film-box">
                <h2>Upcoming Film Releases for UK:</h2>
                <FilmList films={this.state.films}/>
            </div>
        );
    }
}

export default FilmBox;