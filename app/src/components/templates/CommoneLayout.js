import React from "react"

export default function CommonLayout({ children }) {
    return (
        <div>
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </div>
    )
}
