export const ADD_SHOW = "ADD_SHOW";

export const actionTypes = {
  addShow: {
    ADD_SHOW: "ADD_SHOW",
  },
};

export const addShow = (show) => ({ type: ADD_SHOW, payload: show });

const initialState = {
  shows: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOW:
      return { ...state, shows: [...state.shows, action.payload] };
    default:
      return state;
  }
};
