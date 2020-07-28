import * as types from "./productsTypes"

export function fetchProducts() {
  return ({ type: types.REQUESTING })
}
export function productsReceived(payload) {
  return ({ type: types.SUCCESS, payload })
}
export function productsReceiveFailure(error) {
  return ({ type: types.FAILURE, error:String(error) })
}