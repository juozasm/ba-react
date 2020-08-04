import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from "store/products/productsActions"

export default function useProducts() {
    const dispatch = useDispatch()
    const { error, isFetching, data: products } = useSelector(
        (state) => state.products
    )

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return { error, isFetching, products }
}
