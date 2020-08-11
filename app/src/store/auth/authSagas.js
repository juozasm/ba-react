import { put, takeLatest } from "redux-saga/effects"
import { login as loginAPI } from "api/authAPI"
import * as types from "./authTypes"
import { loginSuccess, loginFailure } from "./authActions"

export function* watchLogin() {
    yield takeLatest(types.LOGIN_REQUEST, login)
}

function* login(action) {
    console.log(action)
    try {
        const { data: { access_token }} = yield loginAPI().fetch(action.payload)
        if (!access_token) throw new Error("Something went wrong")
        yield put(loginSuccess(access_token))
        localStorage.setItem('token' , access_token)
    } catch (error) {
        yield put(loginFailure(String(error)))
    }
}
