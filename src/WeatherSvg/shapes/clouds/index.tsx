import { css } from "@emotion/react";


export const clouds = {
  styles: css`
    .small-cloud {
      animation-duration: 15s;
      animation-timing-function: linear;
      --cloud-push: 0px;
      &.push {
        --cloud-push: 7px;
      }
      &.reverse {
        animation-duration: 10s;
        animation-timing-function: linear;
      }
    }
  `,
  defs: <>
  </>,
  symbol: <>
    <symbol id="grayCloud">
      <path d="M20,15 Q25,0 45,11 Q60,5 60,20 A30,15 5 1,1 20,15 Z" />
    </symbol>
    <symbol id="whiteCloud">
      <path d="M11,47 Q13,37 21,42 Q31,30 41,38 A28,21 -25 1,1 35,75 Q23,85 19,73 A12,12 0 0,1 11,47Z" />
    </symbol>
  </>
}