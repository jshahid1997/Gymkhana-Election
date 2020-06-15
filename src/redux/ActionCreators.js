import * as ActionTypes from "./ActionTypes";

//ADDING
export const addCandidate = (post, name) => (dispatch) => {
  console.log(post, name);
  if (post === "VP") {
    dispatch(addVP(name));
  } else if (post === "GS") {
    dispatch(addGS(name));
  } else if (post === "CS") {
    dispatch(addCS(name));
  } else if (post === "SS") {
    dispatch(addSS(name));
  }
};

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

//DELETING
export const deleteCandidate = (post, name) => (dispatch) => {
  if (post === "VP") {
    dispatch(deleteVP(name));
  } else if (post === "GS") {
    dispatch(deleteGS(name));
  } else if (post === "CS") {
    dispatch(deleteCS(name));
  } else if (post === "SS") {
    dispatch(deleteSS(name));
  }
};

export const deleteVP = (VP) => (dispatch) => {
  dispatch({
    type: ActionTypes.DELETE_VP,
    payload: VP,
  });
};
export const deleteGS = (GS) => (dispatch) => {
  dispatch({
    type: ActionTypes.DELETE_GS,
    payload: GS,
  });
};
export const deleteCS = (CS) => (dispatch) => {
  dispatch({
    type: ActionTypes.DELETE_CS,
    payload: CS,
  });
};
export const deleteSS = (SS) => (dispatch) => {
  dispatch({
    type: ActionTypes.DELETE_SS,
    payload: SS,
  });
};

//VOTING
export const voteVP = (VP) => (dispatch) => {
  dispatch({
    type: ActionTypes.VOTE_VP,
    payload: VP,
  });
};
export const voteGS = (GS) => (dispatch) => {
  dispatch({
    type: ActionTypes.VOTE_GS,
    payload: GS,
  });
};
export const voteCS = (CS) => (dispatch) => {
  dispatch({
    type: ActionTypes.VOTE_CS,
    payload: CS,
  });
};
export const voteSS = (SS) => (dispatch) => {
  dispatch({
    type: ActionTypes.VOTE_SS,
    payload: SS,
  });
};
