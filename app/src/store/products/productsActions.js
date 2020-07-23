import * as productsAPI from "../../api/productsAPI"
import * as types from "./productsConstants"

export function getProducts() {
    return (dispatch) => {
        dispatch({ type: types.REQUESTING })
        productsAPI
            .getProducts()
            .then((d) => {
                dispatch({ type: types.SUCCESS, payload: d })
            })
            .catch((error) =>
                dispatch({ type: types.FAILURE, error: String(error) })
            )
    }
}
