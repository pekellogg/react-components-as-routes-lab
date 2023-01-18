import React from 'react';
import { actors } from '../data';

class Actors extends React.Component {

  render() {
    return (
      <div>
        <h1>Actors Page</h1>
        {
          actors.map((actor, i) => (
            <div key={actor.name}>
              <h3>Name: {actor.name}</h3>
              <p>Movies:</p>
              <ul>
                {
                  actor.movies.map((movie, i) => (
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

export default Actors;