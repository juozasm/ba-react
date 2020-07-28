import { takeEvery, put } from 'redux-saga/effects'
import { getProducts } from "api/productsAPI"
import * as types from "./productsTypes"
import { productsReceived, productsReceiveFailure } from './productsActions'

export function* watchFetchProducts() {
  yield takeEvery(types.REQUESTING, fetchProducts)
}

function* fetchProducts() {
  try {
    const products = yield getProducts()
    if(!products.length)  throw(new Error('No products')) 
    yield put(productsReceived(products))
  } catch (error) {
    yield put(productsReceiveFailure(error))
  }
}