import * as actions from "./authActions"
import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    requesting: false,
    token: localStorage.getItem("token"),
    error: null,
}

const authReducer = createReducer(initialState, {
    [actions.login]: (state) => ({
        ...state,
        requesting: true,
    }),
    [actions.loginSuccess]: (state, action) => ({
        ...state,
        token: action.payload,
        requesting: false,
        error: null,
    }),
    [actions.loginFailure]: (state, action) => ({
        ...state,
        requesting: false,
        error: action.payload,
    }),
    [actions.logout]: () => ({
        ...state,
        requesting: false,
        token: null,
        error: null,
    }),
})

export default authReducer
