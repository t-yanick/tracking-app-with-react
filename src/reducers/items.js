const defaultItemsState = [];

const itemsReducer = (state = defaultItemsState, action) => {
  switch (action.type) {
    case 'ADD_ITEMS':
      return action.items;
    default:
      return state;
  }
};

export default itemsReducer;