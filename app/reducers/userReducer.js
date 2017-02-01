const user = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return action.data;
    default:
      return state;
  }
};

export default user;
