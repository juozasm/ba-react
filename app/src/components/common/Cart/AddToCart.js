import React from "react"
import { useDispatch } from "react-redux"
import { FaShoppingCart } from "react-icons/fa"
import StyledButton from "../../../styled/StyledButton"
import styled from "styled-components"
import { addProduct, removeProduct } from "../../../store/cart/cartActions"

const StyledAddToCart = styled(StyledButton)`
    &:hover {
        color: ${(props) => props.theme.lightGrey};
    }
`

export default function AddToCart({ product }) {
    const dispatch = useDispatch()

    const addToProductCart = () => dispatch(addProduct(product.id))
    const removeProductFromCart = () => dispatch(removeProduct(product.id))

    return (
        <>
            <StyledAddToCart onClick={addToProductCart} variant={"action"}>
                {"+Add"} <FaShoppingCart />
            </StyledAddToCart>
            <StyledAddToCart onClick={removeProductFromCart} variant={"action"}>
                {"+Remove"} <FaShoppingCart />
            </StyledAddToCart>
        </>
    )
}
