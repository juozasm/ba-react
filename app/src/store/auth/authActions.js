import * as types from "./authTypes"
import { createAction } from "@reduxjs/toolkit"

export const login = createAction(types.LOGIN_REQUEST)
export const loginSuccess = createAction(types.LOGIN_SUCCESS)
export const loginFailure = createAction(types.LOGIN_FAILURE)

export const logout = createAction(types.LOGOUT)

