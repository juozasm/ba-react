import React, { useEffect } from "react"
import CommonLayout from "../../components/base/CommonLayout"
import { Link } from "react-router-dom"
import AddToCart from "../../components/common/Cart/AddToCart"
import useProducts from "hooks/useProducts"

export default function Products() {
  const { error, isFetching, products } = useProducts()

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
