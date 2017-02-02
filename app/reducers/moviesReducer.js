const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return action.data;
    case 'TOGGLE_FAVORITE':
      const newState = state.results.map((movie, index) => {
        if (movie.id === action.data.id) {
          if (movie.favorited) {
            return Object.assign({}, action.data, { favorited: false });
          } else {
            return Object.assign({}, action.data, { favorited: true });
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
