import React from "react"
import useRequest from "../../../hooks/useRequest"
import { getProductsById } from "../../../api/productsAPI"
import styled from "styled-components"
import { useEffect } from "react"

const StyledCart = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  padding: 20px;
`

export default function Cart({ products }) {
  const [{ error, isFetching, data }, makeRequest] = useRequest()
  console.log(products)
  useEffect(() => {
    const { fetch, cancel } = getProductsById(Object.keys(products))
    makeRequest(fetch)
    return () => {
      cancel("Component has been umounted")
    }
  }, [makeRequest, products])

  return (
    <StyledCart>
      {isFetching
        ? "fetching..."
        : data && (
            <ul>
              {data.map(({ name, id }) => (
                <li key={id}>
                  {name} {products[id]}
                </li>
              ))}
            </ul>
          )}
    </StyledCart>
  )
}
