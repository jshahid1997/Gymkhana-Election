import * as ActionTypes from "./ActionTypes";

export const ElectionInstance = (
  state = {
    isLoading: true,
    errmess: null,
    instance: {},
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.SET_INSTANCE:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        instance: action.payload,
      };
    default:
      return state;
  }
};
