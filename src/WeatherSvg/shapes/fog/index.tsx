import { css } from "@emotion/react";

export const fog = {
  styles: css`
    .fog-stop-1 {
      stop-color:rgb(255,255,255);
      stop-opacity:0.8
    }
    .fog-stop-2 {
      stop-color: white;
      stop-opacity: 0;
    }
  `,
  defs: <>
    <linearGradient id="fogGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" className="fog-stop-1" />
      <stop offset="100%" className="fog-stop-2" />
    </linearGradient>

    <filter id="fogFilter" x="0" y="0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
    </filter>
  </>,
  symbol: <></>
}