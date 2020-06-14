import * as ActionTypes from "./ActionTypes";

export const addVP = (VP) => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_VP,
    payload: VP,
  });
};
export const addGS = (GS) => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_GS,
    payload: GS,
  });
};
export const addCS = (CS) => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_CS,
    payload: CS,
  });
};
export const addSS = (SS) => (dispatch) => {
  dispatch({
    type: ActionTypes.ADD_SS,
    payload: SS,
  });
};
