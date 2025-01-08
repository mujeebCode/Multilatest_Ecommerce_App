
import { ADD_TO_CART } from "./constants";

const initialStage = [];


const cartReducer = (state = initialStage, action) => {


    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ];
        default:
            return state
    }

}

export default cartReducer;




