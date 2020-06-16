import React, { useState } from "react"
import logo from "./logo.svg"
import styles from "./App.module.scss"
import cx from "classnames"
import Comp, { a /* default as Comp */ } from "./Component"
// import "./App.scss"

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     // { className: 'kazkas' }
//     // Don't call this.setState() here!
//     this.state = { logoIsShown: true }
//     this.toggleImage = this.toggleImage.bind(this)
//   }
//   toggleImage() {
//     this.setState((state) => ({
//       logoIsShown: !state.logoIsShown,
//     }))
//   }
//   render() {
//     return (
//       //React.createElement(App, { className: cx(styles.App), style:{ border: '1px solid red'} })
//       // <div className={`${styles.App} ${styles.appLogo}`}>

//       <div className={cx(styles.App)}>
//         <header>
//           <img
//             src={logo}
//             className={cx(
//               styles.appLogo,
//               !this.state.logoIsShown && styles.dNone
//             )}
//             alt="logo"
//           />
//           <h1>TITLE</h1>
//           <p onClick={this.toggleImage}>TOGGLE IMAGE</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//         <div>sdkjhsdhjsdhjsdsdjh</div>
//       </div>
//     )
//   }
// }

function App() {
  const [isShown, setIsShown] = useState(true)
  const [isTextShown, setIsTextShown] = useState(true)
  const [isX, setIsX] = useState(true)

  const func = () => {
    setIsShown(!isShown)
    setIsX(!isX)
  }

  const obj = {
    name: "Jonas",
    surname: "Jonaitis",
    obj2: {
      age: 18,
    },
  }

  const { name: manoVardas, surname, obj2: { age } = {}, obj2 } = obj
  // const state = arr[0]
  // const setState = arr[1]
  // (() => React.createElement())()

  return (
    // <div className={`${styles.App} ${styles.appLogo}`}>
    <div className={cx(styles.App)}>
      {isTextShown && <Comp setIsShown={func} />}
      <header>
        <img
          src={logo}
          className={cx(styles.appLogo, !isShown && styles.dNone)}
          alt="logo"
        />
        <h1>TITLE {isX ? "test" : "not"}</h1>
        <p onClick={func}>toggle image</p>
        {isTextShown && (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        )}
      </header>
      <div onClick={() => setIsTextShown(!isTextShown)}>
        sdkjhsdhjsdhjsdsdjh
      </div>
    </div>
  )
}

export default App
