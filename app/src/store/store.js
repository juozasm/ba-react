import rootReducer from "./rootReducer"
import {
    createSlice,
    configureStore,
    getDefaultMiddleware,
    applyMiddleware
} from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer:rootReducer,
    middleware,
    devTools: true
})

sagaMiddleware.run(rootSaga)

export default store

if (module.hot) {
    module.hot.accept("./rootReducer", () => {
        store.replaceReducer(rootReducer)
    })
}
