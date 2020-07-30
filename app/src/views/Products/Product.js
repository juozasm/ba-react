import React, { useEffect } from "react"
import CommonLayout from "components/base/CommonLayout"
import { getProduct } from "api/productsAPI"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Product() {
  const [product, setProduct] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    setIsFetching(true)
    getProduct(id).then((p) => {
      p && setProduct(p)
      setIsFetching(false)
    })
  }, [id])

  return (
    <CommonLayout>
      {isFetching ? (
        <p>Is fetching...</p>
      ) : (
        product && (
          <>
            <h1>{product.name}</h1>
          </>
        )
      )}
    </CommonLayout>
  )
}
