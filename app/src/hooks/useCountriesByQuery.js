import { useEffect, useReducer } from "react"
import { getData } from "../helpers"

const initialState = {
  data: null,
  fetching: false,
  error: null,
}

const types = {
  REQ_DATA: "REQ_DATA",
  REQ_DATA_SUCCESS: "REQ_DATA_SUCCESS",
  REQ_DATA_FAILURE: "REQ_DATA_FAILURE",
}

export const reducer = (state, action) => {
  switch (action.type) {
    case types.REQ_DATA:
      return {
        ...state,
        fetching: true,
        error: null,
        data: null,
      }
    case types.REQ_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        fetching: false,
      }
    case types.REQ_DATA_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default function useCountriesByQuery(query) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const reqData = () => dispatch({ type: types.REQ_DATA })
  const reqDataSuccess = (payload) =>
    dispatch({ type: types.REQ_DATA_SUCCESS, payload })
  const reqDataFailure = (error) =>
    dispatch({ type: types.REQ_DATA_FAILURE, error })
  useEffect(() => {
    console.log("query")
    let mounted = true
    // yra componentDidMount ir componentDidUpdate
    if (query) {
      reqData()
      getData(`https://restcountries-v1.p.rapidapi.com/name/${query}`)
        .then((data) => {
          if (mounted) {
            if (data) {
              setTimeout(() => mounted && reqDataSuccess(data), 1000)
            } else {
              throw new Error("no data")
            }
          }
        })
        .catch((error) => mounted && reqDataFailure(error.toString()))
    } else {
      reqDataSuccess(null)
    }
    return () => {
      mounted = false
      // componentWillUnmount
    }
  }, [query])
  // return [state.data, state.fetching, state.error]

  return { data: state.data, fetching: state.fetching, error: state.error }
}
