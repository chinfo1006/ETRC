/**
 * 保存state数据的容器。整个应用只能有一个 Store,一般不需要更改和添加代码
 */
'use strict';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    //将Store和reducer绑定
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
