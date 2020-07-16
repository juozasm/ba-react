import request from "./request"

export function getProducts(...params) {
  return request("/products", "GET")
}

export function getProduct(id) {
  return request(`/products/${id}`, "GET")
}
