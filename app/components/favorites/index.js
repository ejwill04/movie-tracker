import React, { Component } from 'react';
import MovieCard from '../moviecard';

export default class Favorites extends Component {

  render() {
    let favoritesList = [];
    if (!this.props.movies || !this.props.popularMovies) {
      return null;
    }

    favoritesList = (this.props.movies).concat(this.props.popularMovies) || [];

    // removes duplicates
    let favoritesAssociativeArray = {};
    for (let i = 0; i < favoritesList.length; i++) {
      favoritesAssociativeArray[favoritesList[i]['id']] = favoritesList[i];
    }

    // sets our new favorites array
    const uniqFavoritesList = [];
    for (let id in favoritesAssociativeArray) {
      if (favoritesAssociativeArray.hasOwnProperty(id)) {
        uniqFavoritesList.push(favoritesAssociativeArray[id]);
      }
    }

    const renderFavoritesList = uniqFavoritesList.map(m => {
      return m.favorited ? (<MovieCard {...this.props} data={m} key={m.id} />) : null;
    });

    return (
      <div>
        <h2>Favorites</h2>
        <section className='movie-list'>
          {renderFavoritesList}
        </section>
      </div>
    );
  }
}

Favorites.propTypes = {
  movies: React.PropTypes.array,
  popularMovies: React.PropTypes.array,
};
