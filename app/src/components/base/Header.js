import React from "react"
import styled from "styled-components"
import MainLogo from "../common/MainLogo"
import MainNav from "../common/MainNav"
import mainRoutes from "../../routes"
import Cart from "../common/Cart"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  background-color: ${(props) => props.theme.lightGrey};
  width: 100vw;
  padding: 20px 40px 20px 20px;
`

export default function Header() {
  return (
    <StyledHeader>
      <MainLogo />
      <MainNav routes={mainRoutes} />
      <Cart />
    </StyledHeader>
  )
}
