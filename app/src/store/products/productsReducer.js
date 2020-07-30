import * as actions from "./productsActions"
import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    requesting: false,
    data: null,
    error: null,
}

const productsReducer = createReducer(initialState,{
    [actions.fetchProducts]: () => ({
        requesting: true,
        data: null,
        error: null,
    }),
    [actions.productsReceived]: (state, action) => ({
        requesting: false,
        data: action.payload,
        error: null,
    }),
    [actions.productsReceiveFailure]: (state, action) => ({
        requesting: false,
        data: null,
        error: action.payload,
    })
})

export default productsReducer