import request from "./request"
import generateUrlParams from "utils/generateUrlParamsFromArray"

export function getProducts() {
  const { fetch, cancel } = request()
  return {
    fetch: () => fetch("/products", "GET"),
    cancel,
  }
}

export function getProduct() {
  const { fetch, cancel } = request()
  return {
    fetch: (id) => fetch(`/products/${id}`, "GET"),
    cancel,
  }
}

export function getProductsById(ids) {
  const { fetch, cancel } = request()
  const urlParams = generateUrlParams(
    ids.map((id) => ({ name: "id", value: id }))
  )
  return {
    fetch: () => fetch(`/products?${urlParams}`, "GET"),
    cancel,
  }
}
