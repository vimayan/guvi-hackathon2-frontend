import { createStore,combineReducers,applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import ShowReducers from '../reducer/showReducer';
import thunk from 'redux-thunk'


const reducers = combineReducers(

    {
bookmyshow:ShowReducers,


    }

)

const middleware = [thunk]

const store = createStore(
reducers,
composeWithDevTools(applyMiddleware(...middleware)) 

);

export default store;