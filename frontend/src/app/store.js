/*
The selected code is setting up a Redux store for a JavaScript application using Redux Toolkit. Here's a breakdown of what the code does:

    The configureStore function is imported from Redux Toolkit. This function simplifies the process of setting up a Redux store with good default settings.

    The authReducer is imported. This is a reducer function that handles actions related to authentication.

    The store is created using configureStore. The reducer option is an object that maps from slice names to reducers. In this case, there's one slice named 'auth' that uses authReducer.

    The store is then exported so it can be used in other parts of the application, typically at the top level where the React application is rendered.

This setup allows the application to use Redux for state management. The auth slice of the state can be updated by dispatching actions that are handled by authReducer.
*/
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import jobReducer from "../features/jobs/jobSlice";
import subscriptionReducer from "../features/subscription/subscriptionSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    jobs: jobReducer,
    subscription: subscriptionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
