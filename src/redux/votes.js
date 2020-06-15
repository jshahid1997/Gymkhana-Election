import * as ActionTypes from "./ActionTypes";

export const Votes = (
  state = {
    isLoading: true,
    errmess: null,
    votes: {
      VP: 0,
      GS: 0,
      CS: 0,
      SS: 0,
    },
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.VOTE_VP:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        votes: {
          ...state.votes,
          VP: action.payload,
        },
      };
    case ActionTypes.VOTE_GS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        votes: {
          ...state.votes,
          GS: action.payload,
        },
      };
    case ActionTypes.VOTE_CS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        votes: {
          ...state.votes,
          CS: action.payload,
        },
      };
    case ActionTypes.VOTE_SS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        votes: {
          ...state.votes,
          SS: action.payload,
        },
      };

    default:
      return state;
  }
};
