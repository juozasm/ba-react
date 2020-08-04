import { useEffect, useState } from "react"
import { getProduct } from "api/productsAPI"

export default function useProduct(id) {
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    let mounted = true
    const { fetch, cancel } = getProduct()
    async function fetchData(id) {
      setIsFetching(true)
      try {
        const { data } = await fetch(id)

        if (!data) {
          throw new Error("no product")
        }
        if (mounted) {
          setProduct(data)
          setIsFetching(false)
        }
      } catch (error) {
        console.log(error)
        if (mounted) {
          setIsFetching(false)
          setError(String(error))
        }
      }
    }
    fetchData(id)

    return () => {
      cancel("Component was unmounted")
      mounted = false
    }
  }, [id])

  return {
    product,
    error,
    isFetching,
  }
}
