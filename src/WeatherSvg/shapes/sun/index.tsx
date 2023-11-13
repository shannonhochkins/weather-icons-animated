import { css, keyframes } from "@emotion/react";

const rayMoveAmount = 2.5;

const weatherRay1 = keyframes`
  0%,
  100% {
    transform: translate(0%);
  }
  50% {
    transform: translateY(-${rayMoveAmount}%);
  }
  `;

const weatherRay2 = keyframes`
  0%,
  100% {
    transform: translate(0%);
  }
  50% {
    transform: translate(-${rayMoveAmount}% * 0.5, ${rayMoveAmount}% * 0.5);
  }
`;

const weatherRay3 = keyframes`
  0%,
  100% {
    transform: translate(0%);
  }
  50% {
    transform: translateX(${rayMoveAmount}%);
  }
`;

const weatherRay4 = keyframes`
  0%,
  100% {
    transform: translate(0%);
  }
  50% {
    transform: translate(-${rayMoveAmount}% * 0.5, -${rayMoveAmount}% * 0.5);
  }
`;

const weatherRay5 = keyframes`
  0%,
  100% {
    transform: translate(0%);
  }
  50% {
    transform: translateY(${rayMoveAmount}%);
  }
`;

const weatherRay6 = keyframes`
  0%,
  100% {
    transform: translate(0%);
  }
  50% {
    transform: translate(${rayMoveAmount}% * 0.5, -${rayMoveAmount}% * 0.5);
  }
`;

const weatherRay7 = keyframes`
  0%,
  100% {
    transform: translate(0%);
  }
  50% {
    transform: translateX(-${rayMoveAmount}%);
  }
`;

const weatherRay8 = keyframes`
  0%,
  100% {
    transform: translate(0%);
  }
  50% {
    transform: translate(${rayMoveAmount}% * 0.5, ${rayMoveAmount}% * 0.5);
  }
`;


export const sun = {
  styles: css`
    .sun-mask-circle {
      fill: black;
      transition: transform 0.5s ease-in-out;
      transform: scale(1);
      transform-origin: 50% 50%;
      stroke: black;
      stroke-width: 6;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .sun {
      .sun-circle {
        fill: transparent;
        transition: transform 0.5s ease-in-out;
        transform: scale(1);
        transform-origin: 50% 50%;
        stroke: url(#gradYellow);
      }
      .path {
        stroke-width: 6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .rays {
        transform-origin: 50%;
        animation-duration: 120s;
        animation-timing-function: linear;
      }

      .ray {
        transition: transform 0.5s ease-in-out;
        transform: scale(1);
        transform-origin: 50% 50%;
        stroke: yellow;
        &:nth-of-type(1) {
          animation: ${weatherRay1} 5s infinite 0s;
        }
        &:nth-of-type(2) {
          animation: ${weatherRay2} 5s infinite 0.1s;
        }
        &:nth-of-type(3) {
          animation: ${weatherRay3} 5s infinite 0.2s;
        }
        &:nth-of-type(4) {
          animation: ${weatherRay4} 5s infinite 0.3s;
        }
        &:nth-of-type(5) {
          animation: ${weatherRay5} 5s infinite 0.4s;
        }
        &:nth-of-type(6) {
          animation: ${weatherRay6} 5s infinite 0.5s;
        }
        &:nth-of-type(7) {
          animation: ${weatherRay7} 5s infinite 0.6s;
        }
        &:nth-of-type(8) {
          animation: ${weatherRay8} 5s infinite 0.7s;
        }
      }
    }
  `,
  defs: <mask className="sun-mask" id="sun-mask">
    <rect x="0" y="0" width="100" height="100" fill="white"/>
    <circle className="sun-mask-circle" cx="50" cy="48.5" r="16.5"/>
  </mask>,
  symbol: <symbol id="sun">
    <g className="sun-mask">
        <g className="sun">
            <g className="rays-mask" mask="url(#sun-mask)">
                <g className="rays animated infinite rotate">
                    <line className="path ray" x1="50" y1="12.3" x2="50" y2="18.9"/>
                    <line className="path ray" x1="75.7" y1="22.8" x2="70.9" y2="27.6"/>
                    <line className="path ray" x1="86.2" y1="48.5" x2="79.6" y2="48.5"/>
                    <line className="path ray" x1="75.7" y1="74.2" x2="70.9" y2="69.4"/>
                    <line className="path ray" x1="50" y1="78.1" x2="50" y2="84.7"/>
                    <line className="path ray" x1="29.1" y1="69.4" x2="24.3" y2="74.2"/>
                    <line className="path ray" x1="20.4" y1="48.5" x2="13.8" y2="48.5"/>
                    <line className="path ray" x1="29.1" y1="27.6" x2="24.3" y2="22.8"/>
                </g>
            </g>
            <circle className="path sun-circle" cx="50" cy="48.5" r="16.5"/>
        </g>
    </g>
  </symbol>
}