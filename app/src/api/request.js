import BASE_URL from "./baseURL"
import axios from "axios"

export default function request() {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    const instance = axios.create({
        cancelToken: source.token,
        baseURL: BASE_URL,
    })

    return {
        fetch: (url = "/", options) => instance(url, options),
        cancel: source.cancel,
    }
}
