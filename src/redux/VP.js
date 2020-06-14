import * as ActionTypes from "./ActionTypes";

export const VP = (
  state = {
    isLoading: true,
    errmess: null,
    VP: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_VP:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        VP: [...state.VP, action.payload],
      };

    case ActionTypes.VP_LOADING:
      return { ...state, isLoading: true, errMess: null, VP: [] };

    case ActionTypes.VP_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        VP: [],
      };

    default:
      return state;
  }
};
