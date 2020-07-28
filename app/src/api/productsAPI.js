import request from "./request"
import generateUrlParams from "utils/generateUrlParamsFromArray"

export function getProducts() {
  return request("/products", "GET")
}

export function getProduct(id) {
  return request(`/products/${id}`, "GET")
}

export function getProductsById(ids) {
  const urlParams = generateUrlParams(ids.map(id => ({ name: 'id', value: id})))
  return request(`/products?${urlParams}`, "GET")
}
