import { ADD_TO_CART } from "./constants";

const addTOCart = (item) => {
    return {

        type: ADD_TO_CART,

        data: item
    }
}

export default addTOCart



