import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { combineReducers } from "redux";
// import { apolloReducer } from "apollo-cache-redux";
import authReducer from "./user/userSlice";

const logger = createLogger();

const rootReducer = combineReducers({
  // apollo: apolloReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export { store };
