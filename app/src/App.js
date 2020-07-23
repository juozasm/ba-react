import React from "react"
import HomePage from "./components/pages/HomePage"

export default function App() {
    // router
    const route = "home"
    return route === "home" && <HomePage />
}
