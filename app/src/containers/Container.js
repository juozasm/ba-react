import React, { useState, useEffect } from "react"
import PresentationalComponent from "../components/PresentationalComponent"
import getFormatedTitle from "../utils/getFormatedTitle"

export default function Container() {
  const [query, changeQueryToServer] = useState()

  useEffect(() => {
    // uzklausa i serveri
    setTimeout(() => console.log(query), 1000)
  }, [query])

  return (
    <React.Fragment>
      <PresentationalComponent
        query={query}
        changeQueryToServer={changeQueryToServer}
        title={getFormatedTitle(query || "Default title")}
      />
      <PresentationalComponent />
      <PresentationalComponent />
    </React.Fragment>
  )
}
