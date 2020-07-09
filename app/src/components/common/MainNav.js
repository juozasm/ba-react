import React from "react"
import PropTypes from "prop-types"

export default function MainNav({ routes }) {
    return (
        <nav>
            <ul>
                {routes.map(({ element, href }, i) => (
                    <li key={i}>
                        <a href={href}>{element}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

MainNav.propTypes = {
    routes: PropTypes.array.isRequired,
}
