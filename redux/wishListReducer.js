import { ADD_TO_WISHLIST } from "./constants";

const intialStage = [];

const wishListReducer = (state = intialStage, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [
                ...state,
                action.data
            ];
        default:
            return state
    }

}

export default wishListReducer;