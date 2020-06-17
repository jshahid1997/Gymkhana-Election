import * as ActionTypes from "./ActionTypes";

export const SS = (
  state = {
    isLoading: true,
    errmess: null,
    SS: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_SS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        SS: [...state.SS, action.payload],
      };
    case ActionTypes.DELETE_SS:
      const curr = state.SS.filter((val, ind, arr) => val != action.payload);
      return {
        ...state,
        isLoading: false,
        errMess: null,
        SS: curr,
      };
    case ActionTypes.SS_LOADING:
      return { ...state, isLoading: true, errMess: null, SS: [] };

    case ActionTypes.SS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        SS: [],
      };

    default:
      return state;
  }
};
