import { applyMiddleware, createStore } from "redux";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import rootRreducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWares = [logger, thunk];

const persistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const rootMiddleWares = applyMiddleware(...middleWares);
const compose = composeWithDevTools(rootMiddleWares);

const persistedReducer = persistReducer(persistConfig, rootRreducer);

export const store = createStore(persistedReducer, compose);
export const persistor = persistStore(store);
