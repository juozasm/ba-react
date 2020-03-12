import React, { useState } from "react"
import logo from "./logo.svg"
import styles from "./App.module.scss"
import cx from "classnames"
// import "./App.scss"

// class App extends React.Component {
//     state = {
//         logoIsShown: true
//     }
//     toggleImage = () => {
//         this.setState(state => ({
//             logoIsShown: !state.logoIsShown
//         }))
//     }
//     render() {
//         return (
//             // <div className={`${styles.App} ${styles.appLogo}`}>
//             <div className={cx(styles.App)}>
//                 <header>
//                     <img
//                         src={logo}
//                         className={cx(
//                             styles.appLogo,
//                             !this.state.logoIsShown && styles.dNone
//                         )}
//                         alt="logo"
//                     />
//                     <h1>TITLE</h1>
//                     <p onClick={this.toggleImage}>TOGGLE IMAGE</p>
//                     <a
//                         className="App-link"
//                         href="https://reactjs.org"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Learn React
//                     </a>
//                 </header>
//                 <div>sdkjhsdhjsdhjsdsdjh</div>
//             </div>
//         )
//     }
// }

function App() {
    const [isShown, setIsShown] = useState(true)
    const [isX, setIsX] = useState(true)

    console.log("render")

    const func = () => {
        setIsShown(!isShown)
        setIsX(!isX)
    }

    const obj = {
        name: "Jonas",
        surname: "Jonaitis",
        obj2: {
            age: 18
        }
    }

    const { name: manoVardas, surname, obj2: { age } = {}, obj2 } = obj
    // const state = arr[0]
    // const setState = arr[1]
    return (
        // <div className={`${styles.App} ${styles.appLogo}`}>
        <div className={cx(styles.App)}>
            <header>
                <img
                    src={logo}
                    className={cx(styles.appLogo, !isShown && styles.dNone)}
                    alt="logo"
                />
                <h1>TITLE {isX ? "test" : "not"}</h1>
                <p onClick={func}>toggle image</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div>sdkjhsdhjsdhjsdsdjh</div>
        </div>
    )
}

export default App
