import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import MovieEditorLoader from "./components/movie-editor-loader";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies">Movies</Route>
        <Route path="/movie/:movieId">
          <MovieEditorLoader />
        </Route>
        <Route>
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
