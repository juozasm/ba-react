import { fork } from "redux-saga/effects"
import { watchFetchProducts } from "./products/productsSagas"

export default function* rootSaga() {
    yield fork(watchFetchProducts)
    // code after fork-effect
  }