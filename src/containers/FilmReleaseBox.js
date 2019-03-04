import React, {Component} from 'react'
import FilmList from '../components/FilmList';


class FilmReleaseBox extends Component {

    render(){
        return (
        <div className= "film-release-box">
           <h2>Upcoming Film Release for UK</h2>
            <FilmList/>
        </div>
        )
    }
}
export default FilmReleaseBox;