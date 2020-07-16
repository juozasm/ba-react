import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function MainNav({ routes }) {
  return (
    <nav>
      <ul>
        {routes.map(({ text, href }, i) => (
          <li key={i}>
            <Link to={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

MainNav.propTypes = {
  routes: PropTypes.array.isRequired,
}
