import { useEffect, useMemo } from "react"
import ReactDOM from "react-dom"

const modalRoot = document.getElementById("modal-root")

export default function Modal({ children }) {
  const el = useMemo(() => document.createElement("div"), [])
  useEffect(() => {
    console.log("mounted")
    modalRoot.appendChild(el)

    return () => {
      modalRoot.removeChild(el)
    }
  }, [el])

  return ReactDOM.createPortal(children, el)
}
