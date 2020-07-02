import React, { useEffect } from "react"

export default function Unmountable({ unMount }) {
  useEffect(() => {
    console.log("mounted comp")
    return () => {
      console.log("will unmount")
    }
  }, [])

  return <div onClick={unMount}>to unmount</div>
}
