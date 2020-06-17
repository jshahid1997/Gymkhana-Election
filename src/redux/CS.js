import * as ActionTypes from "./ActionTypes";

export const CS = (
  state = {
    isLoading: true,
    errmess: null,
    CS: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        CS: [...state.CS, action.payload],
      };
    case ActionTypes.DELETE_CS:
      const curr = state.CS.filter((val, ind, arr) => val != action.payload);
      return {
        ...state,
        isLoading: false,
        errMess: null,
        CS: curr,
      };
    case ActionTypes.CS_LOADING:
      return { ...state, isLoading: true, errMess: null, CS: [] };

    case ActionTypes.CS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        CS: [],
      };

    default:
      return state;
  }
};
