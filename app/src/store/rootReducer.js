import { combineReducers } from "redux"
import cart from "./cart"
import products from "./products"
import auth from "./auth"

export default combineReducers({
    cart,
    products,
    auth,
})
