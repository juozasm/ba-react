import React from "react"

export default function PageTemplate({
  header,
  footer,
  rightSidebar,
  leftSidebar,
  children,
}) {
  return (
    <div>
      {header}
      <main>{children}</main>
      {footer}
    </div>
  )
}
