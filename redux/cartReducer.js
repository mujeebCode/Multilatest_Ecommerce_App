
import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

const initialStage = [];


const cartReducer = (state = initialStage, action) => {


    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ];
        case REMOVE_FROM_CART:
            let result = state.filter(item => item.id!=action.data)
            return [...result]
        default:
            return state
    }

}

export default cartReducer;




