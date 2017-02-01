export const addMovies = (data) => {
  return {
    type: 'ADD_MOVIES',
    data,
  };
};

export const setActiveUser = (data) => {
  return {
    type: 'SET_ACTIVE_USER',
    data,
  };
};

export const setLoginErrorMessage = (data) => {
  return {
    type: 'SET_LOGIN_ERROR_MESSAGE',
    data,
  };
};

export const toggleFavorite = (id) => {
  return {
    type: 'TOGGLE_FAVORITE',
    id,
  };
};
