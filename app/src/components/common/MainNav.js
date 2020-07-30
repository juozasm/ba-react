import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledNav = styled.nav`
  width: 100%;
`

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  flex: 1;
  li {
    padding: 0 15px;
  }
`

/**
 * Assign routes to navigation
 * @param {Object[]} routes - main application routes
 */

export default function MainNav({ routes }) {
  return (
    <StyledNav>
      <StyledUl>
        {routes.map(({ text, href }, i) => (
          <li key={i}>
            <Link to={href}>{text}</Link>
          </li>
        ))}
      </StyledUl>
    </StyledNav>
  )
}

MainNav.propTypes = {
  routes: PropTypes.array.isRequired,
}
