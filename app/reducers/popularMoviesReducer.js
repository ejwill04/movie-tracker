const popularMovies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POPULAR_MOVIES':
      return action.data;
    default:
      return state;
  }
};

export default popularMovies;
