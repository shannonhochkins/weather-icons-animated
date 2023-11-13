import { keyframes, css } from "@emotion/react";

export const fadeInOutKeyframes = keyframes`
  0%, 100% {
    stroke-opacity: 0;
    fill-opacity: 0;
  }
  50% {
    stroke-opacity: 1;
    fill-opacity: 1;
  }
`;

export const fadeInOut = css`
  &.fade-in-out {
    animation-name: ${fadeInOutKeyframes};
  }
`;