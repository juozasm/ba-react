import React, { useEffect } from "react"
import CommonLayout from "../../components/base/CommonLayout"
import { getProducts } from "../../api/productsAPI"
import { Link } from "react-router-dom"
import useRequest from "../../hooks/useRequest"

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
            {products.map(({ name, id }) => (
              <li key={id}>
                <Link to={`/products/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
        )
      )}
    </CommonLayout>
  )
}
