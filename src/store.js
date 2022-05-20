import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./Reducers/cartReducer";
import carReducer from "./Reducers/carReducer";

const reducer = combineReducers({
    cart: cartReducer,
    car: carReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;