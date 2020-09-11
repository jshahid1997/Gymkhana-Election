import { createStore, combineReducers, applyMiddleware } from "redux";
import { VP } from "./VP";
import { GS } from "./GS";
import { CS } from "./CS";
import { SS } from "./SS";
import { Votes } from "./votes";
import { ElectionInstance } from "./ElectionInstance";

import thunk from "redux-thunk";
import logger from "redux-logger";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

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
export const ConfigureStore = () => store;
