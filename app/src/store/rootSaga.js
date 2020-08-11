import { fork } from "redux-saga/effects"
import { watchFetchProducts } from "./products/productsSagas"
import { watchLogin } from "./auth/authSagas"

export default function* rootSaga() {
    yield fork(watchFetchProducts)
    yield fork(watchLogin)
    // code after fork-effect
  }