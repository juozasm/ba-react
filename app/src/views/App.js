import React from "react"
import GlobalStyle from "../styled/GlobalStyle"
import SubscriptionModal from "../components/common/SubscriptionModal"
import routes from "../routes"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import RouteSwitch from "../components/base/RouteSwitch"

function App(props) {
    return (
        <>
            <GlobalStyle />
            {/* <SubscriptionModal /> */}
            <Router>
                <Switch>
                    {routes.map(
                        ({
                            href,
                            component,
                            onlyAuthorized,
                            onlyUnAuthorized,
                        }) => (
                            <RouteSwitch
                                onlyAuthorized={onlyAuthorized}
                                onlyUnAuthorized={onlyUnAuthorized}
                                key={href}
                                exact
                                path={href}
                                component={component}
                            />
                        )
                    )}
                </Switch>
            </Router>
        </>
    )
}

export default App
