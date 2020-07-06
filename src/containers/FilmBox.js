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
                    url: "http://www.imdb.com/title/tt5989218/?ref_=rlm"
                },
                {
                    id: 3,
                    name: "Mary Queen of Scots",
                    url: "http://www.imdb.com/title/tt2328900/?ref_=rlm"
                },
                {
                    id: 4,
                    name: "The Lego Movie 2: The Second Part", 
                    url: "http://www.imdb.com/title/tt3513498/?ref_=rlm"
                },
                {
                    id: 5,
                    name: "Captain Marvel",
                    url: "http://www.imdb.com/title/tt4154664/?reef_=rlm"
                }
            ]
        }
    }
    render(){
        return(
            <div className="film-box">
                <h3>Upcoming Film Releases for UK</h3>
                <hr></hr>
                <p>
                <FilmList films={this.state.films}/>
                </p>
            
                <h3>View more upcoming releases >></h3>
            </div>
        );
    }
}

export default FilmBox;