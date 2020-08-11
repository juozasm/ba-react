import React from "react"
import { Route } from "react-router-dom"
import AuthorizedRoute from "./AuthorizedRoute"
import UnAuthorizedRoute from "./UnAuthorizedRoute"

export default function RouteSwitch({
    onlyUnAuthorized,
    onlyAuthorized,
    ...restProps
}) {
    if (onlyUnAuthorized) return <UnAuthorizedRoute {...restProps} />
    if (onlyAuthorized) return <AuthorizedRoute {...restProps} />
    return <Route {...restProps} />
}
