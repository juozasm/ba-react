import request from "./request"

export function login() {
  const { fetch, cancel } = request()
  return {
    fetch: ({ email, password }) => fetch(
        "/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            data: { email,  password },
        }),
    cancel,
  }
}