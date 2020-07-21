import React, { useEffect } from "react"
import CommonLayout from "../../components/base/CommonLayout"
import { getProducts } from "../../api/productsAPI"
import { Link } from "react-router-dom"
import useRequest from "../../hooks/useRequest"
import AddToCart from "../../components/common/Cart/AddToCart"

export default function Products() {
  const [{ error, isFetching, data: products }, makeRequest] = useRequest()

  useEffect(() => {
    makeRequest(getProducts)
  }, [makeRequest])

  return (
    <CommonLayout>
      <h1>Products</h1>
      {Boolean(error) && <p style={{ color: "red" }}>{error}</p>}
      {isFetching ? (
        <p>Is fetching...</p>
      ) : (
        products && (
          <ul>
            {products.map(({ name, id }, i) => (
              <li key={id}>
                <Link to={`/products/${id}`}>{name}</Link>
                <AddToCart product={products[i]} />
              </li>
            ))}
          </ul>
        )
      )}
    </CommonLayout>
  )
}
