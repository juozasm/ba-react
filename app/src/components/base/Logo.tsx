import React from "react"
import styled from "styled-components"
// import PropTypes from "prop-types"

const LogoHolder = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

const LogoImg = styled.img`
  width: 100%;
  max-width: 100%;
  max-height: 100%;
`

interface LogoProps {
  src: string
  alt: string
  width: string
  height: string
}

const Logo: React.FC<LogoProps> = ({ src, alt, width, height }) => {
  return (
    <LogoHolder width={width} height={height}>
      <LogoImg src={src} alt={alt} />
    </LogoHolder>
  )
}

export default Logo

// Logo.propTypes = {
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// }
