import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

/* Reducer */
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  preloadedState: initialState
});

export default store;





// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// /* Reducer */ 
// import rootReducer from './reducer'

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(...middleware)
// );