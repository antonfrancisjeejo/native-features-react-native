import React from "react";
import { Provider } from "react-redux";
import { combineReducers, applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";

import Navigator from "./navigation/PlacesNavigator";
import placesReducer from "./store/places-reducer";
import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("Initialized Database");
  })
  .catch((err) => {
    console.log("Initializing DB failed");
    console.log(err);
  });

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
