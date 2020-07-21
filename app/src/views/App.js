import React from "react"
import GlobalStyle from "../styled/GlobalStyle"
import mainRoutes from "../routes"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Product from "./Products/Product"

function App(props) {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          {mainRoutes.map(({ href, component }) => (
            <Route key={href} exact path={href} component={component} />
          ))}
          <Route exact path={"/products/:id"} component={Product} />
        </Switch>
      </Router>
    </>
  )
}

export default App
