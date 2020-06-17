import { createStore, combineReducers, applyMiddleware } from "redux";

import { VP } from "./VP";
import { GS } from "./GS";
import { CS } from "./CS";
import { SS } from "./SS";
import { Votes } from "./votes";
import { ElectionInstance } from "./ElectionInstance";

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
      ElectionInstance: ElectionInstance,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
