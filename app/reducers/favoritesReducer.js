const favorites = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITES':
      return action.data;
    default:
      return state;
  }
};

export default favorites;
