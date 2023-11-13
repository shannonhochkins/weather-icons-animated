import { keyframes, css } from "@emotion/react";

export const flashKeyframes = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
`;

export const flash = css`
  &.flash {
    animation-name: ${flashKeyframes};
  }
`;