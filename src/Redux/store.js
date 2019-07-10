import { createStore , combineReducers , applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default createStore(
    combineReducers({
        mainReducer
    }),
    {},
    composeWithDevTools(applyMiddleware( logger, thunk))
)