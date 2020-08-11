import React, { useRef } from "react"

export default function Login({ handleLogin }) {
    const emailRef = useRef()
    const passwordRef = useRef()
    
    return (
        <div>
            Login page
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const formData = {
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                    }
                    handleLogin(formData)
                }}
            >
                <label htmlFor="email">
                    Email
                    <input ref={emailRef} name="email" type="text" />
                </label>
                <label htmlFor="email">
                    Password
                    <input ref={passwordRef} name="password" type="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
