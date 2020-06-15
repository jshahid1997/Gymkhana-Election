import { createStore, combineReducers, applyMiddleware } from "redux";

import { VP } from "./VP";
import { GS } from "./GS";
import { CS } from "./CS";
import { SS } from "./SS";
import { Votes } from "./votes";

import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      VP: VP,
      GS: GS,
      CS: CS,
      SS: SS,
      Votes: Votes,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
