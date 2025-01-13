import { css } from "@emotion/react";
import type { ShapeType } from "../type";


export const moon: ShapeType = {
  styles: css`
    
  `,
  defs: <>
    <clipPath id="moon-clip-path">
      <circle cx="50" cy="50" r="45" />
    </clipPath>
    <mask id="moon-mask">
      <circle cx="50" cy="50" r="45" fill="white" />
      <circle cx="20" cy="50" r="45" fill="black" />
    </mask>
  </>,
  symbol: <symbol id="moon">
    <circle cx="50" cy="50" r="45" fill="#e0e0e0" mask="url(#moon-mask)" />
    <circle clipPath="url('#moon-clip-path')" cx="42.5" cy="41.5" r="47.5" fill="white" mask="url(#moon-mask)" />
    <circle cx="50" cy="50" r="45" strokeWidth="1" stroke="black" fill="none" mask="url(#moon-mask)" />
  </symbol>
};