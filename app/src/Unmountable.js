import React, { Component } from "react"

class UnmountableComponent extends Component {
  constructor() {
    super()
    this.myTimeout = null
    this.state = {
      x: 0,
    }
  }

  set1000msTimeout() {
    this.myTimeout = setTimeout(() => this.setState({ x: 1 }), 1000)
  }

  // custom methods

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    clearTimeout(this.myTimeout)
    console.log("UNMOUNT")
    console.log(this.props)
  }

  render() {
    console.log("RENDER kitas", this.mounted)
    return (
      <div
        onClick={() => {
          this.props.updateVar()
          this.set1000msTimeout()
        }}
      >
        X
      </div>
    )
  }
}

export default function Unmountable(props) {
  return <UnmountableComponent {...props} papildomas={"papildomas prop"} />
}
