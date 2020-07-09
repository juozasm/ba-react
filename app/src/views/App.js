import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { testAction as testActionCreator } from "../store/testFeature/testActions"
import GlobalStyle from "../styled/GlobalStyle"
import Header from "../components/base/Header"

function App(props) {
    return (
        <>
            <GlobalStyle />
            <div>
                <Header />
                <main></main>
                <footer></footer>
            </div>
        </>
    )
}

export default App
