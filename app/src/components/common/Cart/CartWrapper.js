import React, { useState } from "react"
import { useSelector } from "react-redux"
import { FaShoppingCart } from "react-icons/fa"
import styled from "styled-components"
import Cart from "./Cart"

const CartWrapperStyled = styled.div`
  position: relative;
`

export default function CartWrapper() {
  const [showCart, setShowCart] = useState(false)
  const products = useSelector((state) => state.cart.products)
  return (
    <CartWrapperStyled>
      <FaShoppingCart onClick={() => setShowCart(!showCart)} />
      {products && Object.keys(products).length > 0 && showCart && (
        <Cart products={products}>Cart</Cart>
      )}
    </CartWrapperStyled>
  )
}
