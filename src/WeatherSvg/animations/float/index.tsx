import { keyframes, css } from "@emotion/react";

const floatKeyframes = keyframes`
  0% {
    transform: translate(0px, calc(var(--cloud-push) + 15px));
    opacity: 0.75;
  }
  25% {
    transform: translate(15px, calc(var(--cloud-push) + 0px));
    opacity: 1;
  }
  50% {
    transform: translate(30px, calc(var(--cloud-push) + 0px));
    opacity: 1;
  }
  75% {
    transform: translate(25px, calc(var(--cloud-push) + 0px));
    opacity: 1;
  }
  100% {
    transform: translate(0px, calc(var(--cloud-push) + 15px));
    opacity: 0.75;
  }
`;

const floatReverseKeyframes = keyframes`
  0% {
    transform: translate(10px, 10px) scale(0.5);
    opacity: 0.75;
  }
  25% {
    transform: translate(15px, 15px) scale(0.5);
    opacity: 1;
  }
  50% {
    transform: translate(10px, 15px) scale(0.5);
    opacity: 1;
  }
  75% {
    transform: translate(0px, 15px) scale(0.5);
    opacity: 1;
  }
  100% {
    transform: translate(10px, 10px) scale(0.5);
    opacity: 0.75;
  }
`

export const float = css`
  &.float {
    animation-name: ${floatKeyframes};
    &.reverse {
      animation-name: ${floatReverseKeyframes};
    }
  }
`;