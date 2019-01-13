// store설정 구성 파일
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import users from 'redux/modules/users';
//import Reactotron from "reactotronConfig";
import { composeWithDevTools } from "redux-devtools-extension";

const history = createHistory();
const middlewares = [thunk, routerMiddleware(history)];

const env = process.env.NODE_ENV;

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const reducer = history => combineReducers({
  users,
  router: connectRouter(history),
});

let store;

if (env === 'development') {
  store = initialStore => 
  //Reactotron.createStore(reducer(history), composeWithDevTools(applyMiddleware(...middlewares)));
  createStore(reducer(history), composeWithDevTools(applyMiddleware(...middlewares)));
}else{
  store = initialStore => 
  createStore(reducer(history), applyMiddleware(...middlewares));
}

export { history };

// //store()을 사용하면 자동으로 configure해줌
export default store();