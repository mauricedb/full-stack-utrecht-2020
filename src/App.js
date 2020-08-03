import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MovieLoader from "./components/movie-loader";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies">Movies</Route>
        <Route path="/movie/:movieId">
          <MovieLoader />
        </Route>
        <Route>
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
