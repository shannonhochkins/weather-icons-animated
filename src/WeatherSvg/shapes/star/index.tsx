import { css } from "@emotion/react";
import type { ShapeType } from "../type";

export const star: ShapeType = {
  styles: css`
    .stars {
      animation-duration: 3s;
    }
  `,
  defs: <>
  </>,
  symbol: <symbol id="star">
    <polygon points="5,0 2,10 10,4 0,4 8,10" style={{
      fill: 'url(#gradYellow)',
      fillRule: 'nonzero'
    }}/>
  </symbol>
};