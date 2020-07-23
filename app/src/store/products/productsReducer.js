import * as types from "./productsConstants"

const initialState = {
    data: null,
    requesting: false,
    error: null,
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REQUESTING:
            return {
                requesting: true,
                data: null,
                error: null,
            }
        case types.SUCCESS:
            return {
                requesting: false,
                data: action.payload,
                error: null,
            }
        case types.FAILURE:
            return {
                requesting: false,
                data: null,
                error: action.error,
            }
        default:
            return state
    }
}

export default productsReducer
