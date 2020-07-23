import rootReducer from "./rootReducer"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

function middleware(store) {
    console.log(store)
    return (next) => (action) => {
        console.log(store, next, action)
        return next(action)
    }
}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(middleware, thunk))
)
export default store
