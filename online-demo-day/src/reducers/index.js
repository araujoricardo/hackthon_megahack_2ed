import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import feed from "./investor/feed"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    feed
    // Outros reducers aqui
  });
