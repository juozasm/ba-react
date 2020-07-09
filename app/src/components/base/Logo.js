import React from "react"
import styled from "styled-components"

const LogoHolder = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`

const LogoImg = styled.img`
    width: 100%;
    max-width: 100%;
    max-height: 100%;
`

export default function Logo({
    src = "#",
    alt = "",
    width = "100%",
    height = "100%",
}) {
    return (
        <LogoHolder width={width} height={height}>
            <LogoImg src={src} alt={alt} />
        </LogoHolder>
    )
}
