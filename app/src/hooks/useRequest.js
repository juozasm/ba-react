import { useReducer, useCallback } from "react"
import useIsMounted from "./useIsMounted"

const initialState = {
  data: null,
  requesting: false,
  error: null,
}

const types = {
  REQUESTING: "REQUESTING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTING:
      return {
        requesting: true,
        data: null,
        error: null,
      }
    case types.SUCCESS:
      return {
        requesting: false,
        data: action.payload,
        error: null,
      }
    case types.FAILURE:
      return {
        requesting: false,
        data: null,
        error: action.error,
      }
    default:
      return state
  }
}

export default function useRequest() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const isMounted = useIsMounted()
  const makeRequest = useCallback((api, ...params) => {
    dispatch({ type: types.REQUESTING })
    api(...params)
      .then((res) => {
        if (isMounted.current) {
          dispatch({ type: types.SUCCESS, payload: res.data })
        }
      })
      .catch((error) => {
        console.log(error)
        if (isMounted.current) {
          dispatch({ type: types.FAILURE, error: String(error) })
        }
      })
  }, [])
  return [state, makeRequest]
}
