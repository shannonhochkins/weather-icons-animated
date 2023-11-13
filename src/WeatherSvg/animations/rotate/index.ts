
import { keyframes, css } from '@emotion/react';

export const rotateKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const rotate = css`
  &.rotate {
    animation-name: ${rotateKeyframes};
  }
`;