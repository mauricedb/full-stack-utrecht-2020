import React from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import MovieListLoader from "./components/movie-list-loader";
import MovieEditorLoader from "./components/movie-editor-loader";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand mb-0 h1">
            Movies
          </Link>
        </nav>
        <Switch>
          <Route path="/movies">
            <MovieListLoader />
          </Route>
          <Route path="/movie/:movieId">
            <MovieEditorLoader />
          </Route>
          <Route>
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
