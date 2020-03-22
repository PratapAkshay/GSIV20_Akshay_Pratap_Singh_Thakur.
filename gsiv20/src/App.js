import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './Containers/MovieList';
import MovieDetail from './Containers/MovieDetail';
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MovieList}/>
        <Route exact path="/movieDetail/:id" component={MovieDetail}/>
      </Switch>
    </div>
  );
}

export default App;
