import React, { useEffect } from "react"
import CommonLayout from "../../components/base/CommonLayout"
import { useDispatch } from "react-redux"
import { fetchProducts } from "store/products/productsActions"

export default function Home() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [])
  return (
    <CommonLayout>
      <h1>Home</h1>
    </CommonLayout>
  )
}
