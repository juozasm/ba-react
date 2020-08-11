import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

export default function AuthorizedRoute({ path, exact, ...restProps }) {
    const isLoggedIn = useSelector(state => !!state.auth.token )
    if (isLoggedIn) return <Route {...restProps} exact={exact} path={path} />
    return <Redirect exact={exact} from={path} to="/login" />
}
