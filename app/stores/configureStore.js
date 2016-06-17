import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'; 
//叠加一些中间件
let createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger()) 
)(createStore);

//加载reducers
export default function configureStore(initialState) { 
  const store = createStoreWithMiddleware(reducers, initialState); // 初始化创建
  if (module.hot) { 
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  } 
  return store;
}
