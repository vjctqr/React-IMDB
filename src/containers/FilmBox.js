import React, {Component} from "react";

class FilmBox extends Component{
    construct(props){
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
}

export default FilmBox;