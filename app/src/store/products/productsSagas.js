import { takeEvery, put } from "redux-saga/effects"
import { getProducts } from "api/productsAPI"
import * as types from "./productsTypes"
import { productsReceived, productsReceiveFailure } from "./productsActions"

export function* watchFetchProducts() {
    yield takeEvery(types.REQUESTING, fetchProducts)
}

function* fetchProducts({ payload: token }) {
    try {
        const { data } = yield getProducts(token).fetch()
        if (!data.length) throw new Error("No products")
        yield put(productsReceived(data))
    } catch (error) {
        yield put(productsReceiveFailure(error))
    }
}
