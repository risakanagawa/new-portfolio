const initialState = {
  selectedProject: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_ITEM":
      return [action.payload];
    default:
      return state;
  }
};
