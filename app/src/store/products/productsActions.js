import * as types from "./productsTypes"
import { createAction } from "@reduxjs/toolkit"

export const fetchProducts = createAction(types.REQUESTING)
export const productsReceived = createAction(types.SUCCESS)
export const productsReceiveFailure = createAction(types.FAILURE)
