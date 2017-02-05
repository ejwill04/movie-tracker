const popularMovies = (state = [], action) => {
  switch (action.type) {
    case 'APPEND_POPULAR_MOVIES':
      return Object.assign({}, state, { results: state.results.concat(action.data.results), page: action.data.page })
    case 'ADD_POPULAR_MOVIES':
      return action.data;
    case 'SET_FAVORITES':
      if (action.data.length === 0) {
        return state;
      }
      let newState = state.results.map((movie, index) => {
        if (action.data.some(favorite => movie.id === favorite.movie_id)) {
          return Object.assign({}, movie, { favorited: true });
        } else {
          return movie;
        }
      });
      return Object.assign({}, state, { results: newState });
    case 'TOGGLE_FAVORITE':
      newState = state.results.map((movie, index) => {
        if (movie.id === action.data.id) {
          if (movie.favorited) {
            return Object.assign({}, action.data, { favorited: false }, { favoriteId: -1 });
          } else {
            return Object.assign({}, action.data, { favorited: true }, { favoriteId: action.favoriteId });
          }
        } else {
          return movie;
        }
      });
      return Object.assign({}, state, { results: newState });
    default:
      return state;
  }
};

export default popularMovies;
