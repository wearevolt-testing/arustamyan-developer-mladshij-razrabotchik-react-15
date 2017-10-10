import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux';
import customerReducer from "./customerReducer";
import productReducer from "./productReducer";
import modalReducer from "../component/modal/reducers";

export default combineReducers({
    customerReducer,
    productReducer,
    modalReducer,
    routing
})