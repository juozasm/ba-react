import React from "react"
import PageTemplate from "./PageTemplate"
import Header from "./Header"

export default function CommonLayout({ children }) {
  return (
    <PageTemplate header={<Header />} footer={<footer>footer</footer>}>
      {children}
    </PageTemplate>
  )
}
