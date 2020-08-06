import React from "react"

export default function InputErrors({ errors }) {
    return errors ? <div>{errors.join(", ")}</div> : null
}
