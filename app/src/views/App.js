import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { testAction as testActionCreator } from "../store/testFeature/testActions"

function App(props) {
    const testFeature = useSelector((state) => state.testFeature)
    const dispatch = useDispatch()
    const testAction = () => dispatch(testActionCreator())
    console.log(testFeature, testAction, props)
    return (
        <div>
            HELLO WORLD! {testFeature.test}{" "}
            <button onClick={testAction}>BOOM!</button>
        </div>
    )
}

export default App
