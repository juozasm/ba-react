/* polyfills */
import 'url-search-params-polyfill'
import "core-js/stable";
import 'babel-polyfill';
import "react-app-polyfill/ie11"
import "react-app-polyfill/ie9"
import "react-app-polyfill/stable"

import React from "react"
import ReactDOM from "react-dom"
import "normalize.css"
import App from "./views/App"
import * as serviceWorker from "./serviceWorker"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import store from "./store"
import theme from "./styled/theme"

const rootEl = document.getElementById("root")

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  rootEl
)
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      rootEl,
    );
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
