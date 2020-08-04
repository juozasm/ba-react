import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { FaShoppingCart } from "react-icons/fa"
import StyledButton from "../../../styled/StyledButton"
import styled from "styled-components"
import { addProduct, removeProduct } from "../../../store/cart/cartActions"
import debounce from "lodash/debounce"
import throttle from "lodash/throttle"

const StyledAddToCart = styled(StyledButton)`
  &:hover {
    color: ${(props) => props.theme.lightGrey};
  }
`

export default function AddToCart({ product }) {
  const dispatch = useDispatch()
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")

  const addToProductCart = debounce(() => dispatch(addProduct(product.id)), 500)
  const removeProductFromCart = () => dispatch(removeProduct(product.id))

  return (
    <>
      <StyledAddToCart onClick={addToProductCart} variant={"action"}>
        {"+Add"} <FaShoppingCart />
      </StyledAddToCart>
      <StyledAddToCart onClick={removeProductFromCart} variant={"action"}>
        {"+Remove"} <FaShoppingCart />
      </StyledAddToCart>
      <input
        onChange={(e) => {
          const val = e.target.value
          debounce(() => {
            console.log(val)
            setInput1(val)
          }, 1000)()
        }}
        placeholder="debounce"
        type="text"
      />
      <div> debounced {input1}</div>
      <input
        onChange={(e) => {
          const val = e.target.value
          throttle(() => {
            setInput2(val)
          }, 10000)()
        }}
        placeholder="throttle"
        type="text"
      />
      <div> throttled {input2}</div>
    </>
  )
}
