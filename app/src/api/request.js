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
    fetch: (url = "/", method = "GET", data) =>
      instance(`${url}`, {
        method, // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      }),
    cancel: source.cancel,
  }
}
