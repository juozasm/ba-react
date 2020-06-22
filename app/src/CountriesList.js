import React from "react"

export default function CountriesList({ countries = [] }) {
  return (
    <ul>
      {countries.map((country, i) => {
        return <li key={`${country.name}-${i}`}>{country.name}</li>
      })}
    </ul>
  )
}
