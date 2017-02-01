const favorites = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return [action.data, ...state];
    default:
      return state;
  }
};

export default favorites;
