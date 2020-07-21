import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cartTypes"

export function addProduct(id) {
  return {
    type: ADD_PRODUCT,
    payload: id,
  }
}
export function removeProduct(id) {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  }
}
