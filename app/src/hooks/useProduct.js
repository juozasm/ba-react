import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getProduct } from "api/productsAPI"

export default function useProduct(id) {
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(false)
    const token = useSelector((state) => state.auth.token)

    useEffect(() => {
        let mounted = true
        const { fetch, cancel } = getProduct(token)
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
        if (token) fetchData(id)

        return () => {
            cancel("Component was unmounted")
            mounted = false
        }
    }, [id, token])

    return {
        product,
        error,
        isFetching,
    }
}
