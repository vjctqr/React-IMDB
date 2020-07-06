import React, {Component} from "react";
import Films from "./Film";

class FilmList extends Component {
    render(){
        const filmNode = this.props.films.map(film => {
            return (
                <Films name={film.name} key={film.id}></Films>
            )
        })

        return(
            <div className="film-List">
                {filmNodes}
            </div>
        )
    }
}

export default FilmList;