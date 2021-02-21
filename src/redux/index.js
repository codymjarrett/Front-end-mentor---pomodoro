import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";

const enhancer = composeWithDevTools(
  applyMiddleware(...[reduxImmutableStateInvariant()])
);
let store = createStore(reducer, undefined, enhancer);

export { store };
