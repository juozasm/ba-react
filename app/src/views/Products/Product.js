import React from "react"
import CommonLayout from "components/base/CommonLayout"
import { useParams } from "react-router-dom"
import useProduct from "../../hooks/useProduct"

export default function Product() {
  const { id } = useParams()

  const { error, isFetching, product } = useProduct(id)

  return (
    <CommonLayout>
      {isFetching ? (
        <p>Is fetching...</p>
      ) : (
        <>
          {error && <div>{error}</div>}
          {product && <h1>{product.name}</h1>}
        </>
      )}
    </CommonLayout>
  )
}
