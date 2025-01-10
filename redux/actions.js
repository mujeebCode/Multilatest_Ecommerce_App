import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST,} from "./constants";


//add to cart
const addTOCart = (item) => {
    return {

        type: ADD_TO_CART,

        data: item
    }
}

//remove added data from cart
const removeFromCart = (item) =>{
        return{
            type: REMOVE_FROM_CART,
            data: item
        }
}

//add to wishlist
const addTOWishList = (item) =>{
    return{
        type: ADD_TO_WISHLIST,
        data:item
    }
}


//remove added data from from wishlist
// const removeFromWishList = () => {
//     return{
//         type: ADD_TO_CART,
//         data: item
//     }
// }






export default {
    addTOCart,
    removeFromCart,
    addTOWishList
    // removeFromWishList
}



