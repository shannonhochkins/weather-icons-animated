import { css, keyframes } from "@emotion/react";

const rainKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    transform: translateY(5px);
    opacity: 1;
  }
  50% {
    transform: translateY(15px);
    opacity: 1;
  }
  75% {
    transform: translateY(25px);
    opacity: 0.75;
  }
  100% {
    transform: translateY(35px);
    opacity: 0;
  }
`

const drizzleKeyframes = keyframes`
  from {
    stroke-dashoffset: 40;
  }
  to {
    stroke-dashoffset: 10;
  }
`;


export const rain = {
  styles: css`
    .drop1 {
      animation: ${rainKeyframes} 1s linear infinite;
    }
    .drop3 {
      animation: ${rainKeyframes} 1s linear infinite 0.5s;
    }
    .drop2 {
      animation: ${rainKeyframes} 2s linear infinite 1s;
    }
    .drop4 {
      animation: ${rainKeyframes} 2s linear infinite 0.8s;
    }
    .drop5 {
      animation: ${rainKeyframes} 1.5s linear infinite 0.8s;
    }
    .drop6 {
      animation: ${rainKeyframes} 1.5s linear infinite 0.5s;
    }
    #rainDrizzle {
      stroke: lightblue;
      stroke-width: 1;
      stroke-dasharray: 3;
      stroke-dashoffset: 1;
      animation: ${drizzleKeyframes} 1.5s linear infinite;
    }
  `,
  defs: <>
    
  </>,
  symbol: <>
    <symbol id="rainDrop">
      <path fill="lightblue" d="M5 0 Q5,0 7,3.5 A2.5,2.5 0 1,1 3,3.5 Q5,0 5,0Z" />
    </symbol>
    <symbol id="rainDrizzle">
      <line x1="20" y1="2" x2="10" y2="40" />
    </symbol>
  </>
}