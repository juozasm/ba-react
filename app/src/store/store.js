import rootReducer from "./rootReducer"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store

if (module.hot) {
    module.hot.accept("./rootReducer", () => {
        store.replaceReducer(rootReducer)
    })
}
