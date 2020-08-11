import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../store/auth/authActions"

export default function AuthButton() {
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()
    const onClick = async () => {
        if (token) {
            console.log('ar kviecia')
            localStorage.removeItem('token')
            dispatch(logout())
        } else {
            history.push("/login")
        }
    }
    return <button onClick={onClick}>{token ? "Logout" : "Login"}</button>
}
