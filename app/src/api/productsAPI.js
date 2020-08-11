import request from "./request"
import generateUrlParams from "utils/generateUrlParamsFromArray"

export function getProducts(token) {
    const { fetch, cancel } = request()
    return {
        fetch: () =>
            fetch(`/products`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }),
        cancel,
    }
}

export function getProduct(token) {
    const { fetch, cancel } = request()
    return {
        fetch: (id) =>
            fetch(`/products/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }),
        cancel,
    }
}

export function getProductsById(token, ids) {
    const { fetch, cancel } = request()
    const urlParams = generateUrlParams(
        ids.map((id) => ({ name: "id", value: id }))
    )
    return {
        fetch: () =>
            fetch(`/products/?${urlParams}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }),
        cancel,
    }
}
