import request from "./request"
import qs from "query-string"

export function getProducts() {
  return request("/products", "GET")
}

export function getProduct(id) {
  return request(`/products/${id}`, "GET")
}

export function getProductsById(ids) {
  const urlParams = qs.stringify({ id: ids })
  console.log(ids, urlParams)
  return request(`/products?${urlParams}`, "GET")
}
