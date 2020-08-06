import React from "react"
import Modal from "./Modal"
import styled, { css } from "styled-components"

function getVariant(variant) {
  switch (variant) {
    case "main":
      return css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `
    default:
      return ""
  }
}

const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 998;
`

const StyledWrapper = styled.div`
  position: fixed;
  ${({ variant }) => getVariant(variant)}
  z-index: 999;
`

export default function ModalWrapper({ children }) {
  return (
    <Modal>
      <StyledOverlay />
      <StyledWrapper variant="main">{children}</StyledWrapper>
    </Modal>
  )
}
