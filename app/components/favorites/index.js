import React, { Component } from 'react';
import MovieCard from '../moviecard';

export default class Favorites extends Component {

  render() {
      let favoritesList = this.props.favorites || [];
      const newFavoritesList = favoritesList.map(m => {
        return m.favorited ? (<MovieCard {...this.props} data={m} key={m.id} />) : null
      });

    return (
      <div>
        <h2>Favorites</h2>
        <section className='movie-list'>
          {newFavoritesList}
        </section>
      </div>
    );
  }
}
