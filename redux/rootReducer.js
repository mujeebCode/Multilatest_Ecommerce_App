import { combineReducers } from "redux";
import cartReducer from "./cartReducer"
import wishListReducer from "./wishListReducer";

const rootReducer = combineReducers({
    reducer: cartReducer,
    wishList: wishListReducer

})

export default rootReducer;
