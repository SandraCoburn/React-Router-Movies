import React from "react";
import { NavLink } from "react-router-dom";
// import MovieList from "./MovieList";\

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}

    <NavLink to="/">
      <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;
