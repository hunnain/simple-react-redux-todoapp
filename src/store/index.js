import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
// import rootReducer from './reducer';
import reducer from './reducer/reducer'

const middleware = applyMiddleware(thunk)
export const rootReducer = combineReducers({
    root:reducer
})
const store = createStore(
    rootReducer,
    {},
    middleware
);

export default store;