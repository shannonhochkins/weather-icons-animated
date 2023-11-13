import { css } from '@emotion/react';
import { flash } from './flash';
import { float } from './float';
import { rotate } from './rotate';
import { fadeInOut } from './fade-in-out';
import { bob } from './bob';

export const globalStyles = css`
  .animated {
    animation-duration: 1s;
    animation-fill-mode: both;
    &.infinite {
      animation-iteration-count: infinite;
    }
    ${Array.from({ length: 6 }, (_, i) => i + 1).map(
      (i) => `
        &.delay-${i}s {
          animation-delay: ${i}s;
        }
      `
    ).join('')}
    ${float}
    ${flash}
    ${rotate}
    ${fadeInOut}
    ${bob}
  }
`;