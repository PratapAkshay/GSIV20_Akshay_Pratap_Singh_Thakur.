import React, {Component} from 'react';
import axios from 'axios';
import "../CSS/main.css"

class MovieList extends React.Component{

    state = {
        movieList : [],
        search : "",
    }

    componentWillMount(){
        this.fetchMovieList()
    }

    fetchMovieList = (event) => {       
        let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=71bd788f04f2683c6478de052215d94f&language=en-US&page=1'
        if(event && event.target.value.length > 0){
            url = `https://api.themoviedb.org/3/search/movie?api_key=71bd788f04f2683c6478de052215d94f&language=en-US&page=1&query=${event.target.value}`
        }
        axios.get(url).then((response) => {
            this.setState({
                movieList: response.data.results,
            })
        })
        .catch((error) => {
            console.log("error",error)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="outerBox">
                    <nav className="top-nav row">
                        <div className="col-lg-6">
                            <input type="search" onChange={this.fetchMovieList} className="form-control" placeholder="🔍 Search...."/>
                        </div>

                        <div className="col-lg-6 text-right">
                            <button className="btn btn-home"><i className="fas fa-home"></i></button>
                        </div>
                    </nav>

                    <ul className="contentList">
                        {this.state.movieList.map( (list,index) => (<li key={index}>
                            <div className="customCard" onClick={()=>this.props.history.push(`/movieDetail/${list.id}`)}>
                                <div className="cardImg">
                                    <img src={`https://image.tmdb.org/t/p/w400/${list.backdrop_path}`}/>
                                </div>
                                <div className="cardContent">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h4>{list.original_title}</h4>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6>({list.vote_average})</h6>
                                        </div>
                                    </div>
                                    <p>{list.overview}</p>
                                </div>
                            </div>
                        </li>))}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default MovieList;