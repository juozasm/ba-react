import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import PresentationalComponent from "../components/PresentationalComponent"
import getFormatedTitle from "../utils/getFormatedTitle"
import { testAction } from "../actions/testActions"

export default function Container() {
    const [query, changeQueryToServer] = useState()
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const actionCaller = () => dispatch(testAction)

    useEffect(() => {
        // uzklausa i serveri
        setTimeout(() => console.log(query), 1000)
        // testAction
    }, [query])

    return (
        <React.Fragment>
            <PresentationalComponent
                testAction={testAction}
                state={state}
                query={query}
                changeQueryToServer={changeQueryToServer}
                title={getFormatedTitle(query || "Default title")}
            />
            <PresentationalComponent />
            <PresentationalComponent />
        </React.Fragment>
    )
}
