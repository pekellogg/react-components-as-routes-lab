import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {

  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        {
          movies.map((movie, i) => (
            <div key={movie.title}>
              <h3>Title: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                {
                  movie.genres.map((movie, i) => (
                    <li key={i}>
                      {movie}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    );
  };

};

export default Movies;