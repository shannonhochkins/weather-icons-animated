import { keyframes, css } from "@emotion/react";

export const bobKeyframes = keyframes`
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(3%) scale(0.95);
  }
`;


export const bob = css`
  &.bob {
    animation: ${bobKeyframes} 3s ease-in-out infinite;
  }
`;