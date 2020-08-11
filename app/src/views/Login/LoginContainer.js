import React from "react"
import { useDispatch } from "react-redux"
import Login from "./Login"
import { login } from "../../store/auth/authActions"

export default function LoginContainer() {
    const dispatch = useDispatch()
    const handleLogin = (formData) => dispatch(login(formData))
    return <Login handleLogin={handleLogin}  />
}
