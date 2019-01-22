// store설정 구성 파일
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import user from './modules/user';
import photos from './modules/photos';
import { composeWithDevTools } from 'redux-devtools-extension';
import { i18nState } from 'redux-i18n';

const history = createHistory();
const middlewares = [thunk, routerMiddleware(history)];

const env = process.env.NODE_ENV;

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const reducer = history => combineReducers({
  user,
  photos,
  router: connectRouter(history),
  i18nState,
});

let store;

if(env === "development"){
  store = initialStore => 
    createStore(reducer(history), composeWithDevTools(applyMiddleware(...middlewares)));
}else{
  store = initialStore => createStore(reducer(history), applyMiddleware(...middlewares));
}

export { history };

// //store()을 사용하면 자동으로 configure해줌
export default store();