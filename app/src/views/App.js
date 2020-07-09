import React from "react"
import { connect, useSelector, useDispatch } from "react-redux"
import { testAction as testActionCreator } from "../store/testFeature/testActions"

function App(props) {
    const testFeature = useSelector((state) => state.testFeature)
    const dispatch = useDispatch()
    const testAction = () => dispatch(testActionCreator)
    console.log(testFeature, testAction, props)
    return <div>HELLO WORLD!</div>
}

export default App

// const mapStateToProps = (state /*, ownProps*/) => {
//     return {
//         testFeature: state.testFeature,
//     }
// }

// const mapDispatchToProps = {
//     testAction,
// }

//export default connect(mapStateToProps, mapDispatchToProps)(App)
