import React, {Component} from 'react';
import "../CSS/main.css"
import axios from 'axios';

class MovieDetail extends React.Component {

    state = {
        details : undefined
    }

    componentWillMount(){   
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=71bd788f04f2683c6478de052215d94f&language=en-US`).then((response) => {
            console.log("response",response)
            this.setState({
                details: response.data,
            })
        })
        .catch((error) => {
            console.log("error",error)
        })
    }

    render(){
        return (
            <React.Fragment>
                {this.state.details != undefined && <div className="outerBox">
                    <nav className="top-nav row">
                        <div className="col-lg-1 text-left">
                            <button className="btn btn-home" onClick={()=>this.props.history.goBack()}><i class="fas fa-arrow-left"></i></button>
                        </div>
                        <div className="col-lg-5 text-left">
                            Movie Detail
                        </div>
                        <div className="col-lg-6 text-right">
                            <button className="btn btn-home" onClick={()=>this.props.history.push('/')}><i className="fas fa-home"></i></button>
                        </div>
                    </nav>

                    <div className="container-fluid">
                        <div className="row customCard">
                            <div className="col-lg-3">
                                <div className="cardImg">
                                    <img src={`https://image.tmdb.org/t/p/w400/${this.state.details.backdrop_path}`}/>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="cardContent">
                                    <h4>{this.state.details.original_title}<strong>({this.state.details.vote_average})</strong></h4>
                                    <p> {this.state.details.release_date} | Length | Director</p>
                                    <p>Cast: Actor 1,Actor 2,....</p>
                                    <p>Description: {this.state.details.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}

export default MovieDetail;