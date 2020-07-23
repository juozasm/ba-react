import React, { useState } from "react"

// MVC m - redux || api V - react component C - react container

export default function PresentationalComponent({
    changeQueryToServer,
    query,
    title,
    body,
}) {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <div>
                <p onClick={() => setShow(!show)}>
                    ${show ? "- Hide" : "+ Show"} additional input:
                </p>
                {show && (
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => changeQueryToServer(e.target.value)}
                    />
                )}
            </div>
        </div>
    )
}
