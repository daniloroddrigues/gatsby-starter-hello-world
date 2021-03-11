import React from "react"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"

export default function Container({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      {children}
    </div>
  )
}
