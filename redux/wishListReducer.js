import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "./constants";

const intialStage = [];

const wishListReducer = (state = intialStage, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [
                ...state,
                action.data
            ];
        case REMOVE_FROM_WISHLIST:
            let result = state.filter(item =>item.id!=action.data)
            return [...result]
        default:
            return state
    }

}

export default wishListReducer;