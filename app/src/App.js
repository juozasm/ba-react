import React, { Component, PureComponent } from "react"
import Unmountable from "./Unmountable"
import CountriesList from "./CountriesList"
import { getData } from "./helpers"

// https://restcountries-v1.p.rapidapi.com/all
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      variable: true,
      allCountries: [],
      countries: null,
      countryName: "",
    }
    this.updateVar = this.updateVar.bind(this)
  }

  async getAllCountries() {
    const allCountries = await getData(
      "https://restcountries-v1.p.rapidapi.com/all"
    )
    if (allCountries) this.setState({ allCountries })
  }
  async getCountriesByCountryName(input) {
    const countries = await getData(
      `https://restcountries-v1.p.rapidapi.com/name/${input}`
    )
    if (countries) {
      this.setState({ countries })
    } else {
      this.setState({ countries: null })
    }
  }

  updateVar() {
    // this.setState({ variable: false }) // setState async method
    // this.setState({ variable: !this.setState }) // setState async method
    // this.setState((state) => ({ variable: !state.variable }))
    this.setState((state) => ({ variable: !state.variable }))
  }

  componentDidMount() {
    console.log("MOUNTED")
    this.getAllCountries()
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("UPDATED")
  //   if (prevState.countryName !== this.state.countryName) {
  //     this.getCountriesByCountryName(this.state.countryName)
  //   }

  //   // if (this.state.variable === false) {
  //   //   this.updateVar(true)
  //   // }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log({
      nextProps,
      oldProps: this.props,
      nextState,
      oldState: this.state,
    })
    // return nextProps !== this.props
    return nextState !== this.state
  }

  render() {
    const { countryName, variable, allCountries, countries } = this.state
    console.log(countryName, countries)
    //  this.updateVar() negalima updateitinti state'o, bus infinity loopas
    return (
      <div>
        <button onClick={this.updateVar}>SPAUSTI {`${variable}`}</button>
        {this.state.variable &&
          Unmountable({ x: "props ", updateVar: this.updateVar })}
        {/* {this.state.variable && <Unmountable x="props" />} */}
        <input
          type="text"
          name="countryName"
          value={countryName}
          onChange={(event) => {
            const name = event.target.name
            const value = event.target.value
            this.setState({ [name]: value })
            this.getCountriesByCountryName(value)
          }}
        />
        <CountriesList countries={countries || allCountries} />
      </div>
    )
  }
}
