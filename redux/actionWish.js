import { ADD_TO_WISHLIST } from "./constants";

const addTOWishList = (item) =>{
    return{
        type: ADD_TO_WISHLIST,
        data:item
    }
}

export default addTOWishList
