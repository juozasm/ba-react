import React, { Suspense, lazy } from "react"
import GlobalStyle from "../styled/GlobalStyle"
import mainRoutes from "../routes"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

const Product = lazy(() => import('./Products/Product'));

function App(props) {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {mainRoutes.map(({ href, component }) => (
                            <Route
                                key={href}
                                exact
                                path={href}
                                component={component}
                            />
                        ))}
                        <Route
                            exact
                            path={"/products/:id"}
                            component={Product}
                        />
                    </Switch>
                </Suspense>
            </Router>
        </>
    )
}

export default App
