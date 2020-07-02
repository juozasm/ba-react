import React, { useState, useEffect } from "react"
import Unmountable from "./Unmountable"
import useCountriesByQuery from "./hooks/useCountriesByQuery"

function CompLv3({ render }) {
  return <div>{render}</div>
}

function CompLv2(props) {
  return <CompLv3 {...props} />
}

function CompLv1(props) {
  return <CompLv2 {...props} />
}

function App() {
  const [query, setQuery] = useState("")
  const [unmount, setUnmount] = useState(false)

  const { data, fetching, error } = useCountriesByQuery(query)

  //getData

  // if(query !== prevQuery){
  //   getData(`https://restcountries-v1.p.rapidapi.com/name/${query}`)
  // }

  useEffect(() => {
    // yra componentDidMount ir componentDidUpdate
    console.log("did mount")
    return () => {
      // componentWillUnmount
    }
  }, [])

  // `https://restcountries-v1.p.rapidapi.com/name/${input}`
  return (
    <div>
      <CompLv1 data={data} />
      {!unmount && <Unmountable unMount={() => setUnmount(true)} />}
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {Boolean(error) && <li>{error}</li>}
        {fetching && <li>fetching...</li>}
        {data && typeof data === "object" && (
          <CompLv1
            render={data.map((val) => (
              <li>{val.name}</li>
            ))}
          />
        )}
      </ul>
    </div>
  )
}

export default App
