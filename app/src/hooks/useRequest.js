import { useReducer, useCallback } from "react"

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
  const makeRequest = useCallback((api, ...params) => {
    dispatch({ type: types.REQUESTING })
    api(...params)
      .then((d) => {
        dispatch({ type: types.SUCCESS, payload: d })
      })
      .catch((error) => dispatch({ type: types.FAILURE, error: String(error) }))
  }, [])
  return [state, makeRequest]
}
