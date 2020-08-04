import React from "react"
import GlobalStyle from "../styled/GlobalStyle"
import routes from "../routes"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App(props) {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          {routes.map(({ href, component }) => (
            <Route key={href} exact path={href} component={component} />
          ))}
        </Switch>
      </Router>
    </>
  )
}

export default App
