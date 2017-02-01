export const addMovies = (data) => {
  return {
    type: 'ADD_MOVIES',
    data,
  };
};

export const setActiveUser = (user) => {
  return {
    type: 'SET_ACTIVE_USER',
    user,
  }
}

export const toggleFavorite = (id) => {
  return {
    type: 'TOGGLE_FAVORITE',
    id,
  }
}
