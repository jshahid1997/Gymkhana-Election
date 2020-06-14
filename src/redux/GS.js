import * as ActionTypes from "./ActionTypes";

export const GS = (
  state = {
    isLoading: true,
    errmess: null,
    GS: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_GS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        GS: [...state.GS, action.payload],
      };

    case ActionTypes.GS_LOADING:
      return { ...state, isLoading: true, errMess: null, GS: [] };

    case ActionTypes.GS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        GS: [],
      };

    default:
      return state;
  }
};
