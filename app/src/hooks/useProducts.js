import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "store/products/productsActions"

export default function useProducts() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.token)
    const { error, isFetching, data: products } = useSelector(
        (state) => state.products
    )

    useEffect(() => {
        if (token) dispatch(fetchProducts(token))
    }, [])

    return { error, isFetching, products }
}
