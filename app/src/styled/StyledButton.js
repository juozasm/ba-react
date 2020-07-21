import styled, { css } from "styled-components"

function getButtonVariant(variant) {
  switch (variant) {
    case "primary":
      return css``
    case "secondary":
      return css``
    case "action":
      return css`
        border: 1px solid ${(props) => props.theme.black};
        &:hover {
          background-color: ${(props) => props.theme.red};
          border: 1px solid ${(props) => props.theme.black};
        }
      `
    default:
      return ""
  }
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.height || "40px"};
  ${(props) => getButtonVariant(props.variant)}
`

export default StyledButton
