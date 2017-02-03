const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return action.data;
    case 'SET_FAVORITES':
      console.log(action.data);
      let newState = state.results.map((movie, index) => {
        for (let i = 0; i < action.data.length; i++) {
          if (movie.id === action.data[i]['movie_id']) {
            return Object.assign({}, movie.data, { favorited: true });
          } else {
            console.log('return same movie');
            return movie;
          }
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

export default movies;
