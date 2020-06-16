import React from "react"

export default class App extends React.Component {
  componentWillUnmount() {
    console.log("ate")
  }
  render() {
    return <div>ABC</div>
  }
}
