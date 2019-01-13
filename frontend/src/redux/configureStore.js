// store설정 구성 파일
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import users from 'redux/modules/users';

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

// 다음 처럼 하면 초기값을 지정할 수 있음:
// initialStore => createStore(reducer, initialStore)
// initialStore => createStore(reducer, initialStore || undefined) 되는지 확인하기
const store = initialStore => 
  createStore(reducer(history), applyMiddleware(...middlewares));

export { history };

// //store()을 사용하면 자동으로 configure해줌
export default store();