const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return action.data;
    default:
      return state;
  }
};

export default movies;
