
import { css, keyframes } from "@emotion/react";

const windBlow = keyframes`
  0% {
    stroke-dasharray: 5 300;
    stroke-dashoffset: -200;
    opacity: 1;
  }
  50% {
    stroke-dasharray: 300 300;
    stroke-dashoffset: -100;
    opacity: 1;
  }
  90% {
    stroke-dasharray: 50 300;
    stroke-dashoffset: -20;
    opacity: 0.7;
  }
  100% {
    stroke-dasharray: 20 300;
    stroke-dashoffset: 0;
    opacity: 0.2;
  }
`;

export const wind = {
  styles: css`
    .wind-string path {
      stroke: #ccc;
      stroke-linecap: round;
      stroke-width: 7px;
      animation: ${windBlow} 3s linear infinite;
    }
  `,
  defs: <></>,
  symbol: <symbol id="wind">
    <g className="wind-string" transform="scale(0.3)">
      <path fill="none" stroke="#43637D" strokeMiterlimit="10" d="M85.263,105.176
        c3.002-1.646,6.403-2.549,9.903-2.549c11.375,0,20.633,9.256,20.633,20.633s-9.258,20.633-20.633,20.633H3.473"/>
      <path fill="none" stroke="#43637D" strokeMiterlimit="10" d="M69.756,113.884
        c1.62-0.888,3.457-1.376,5.345-1.376c6.14,0,11.136,4.996,11.136,11.137c0,6.14-4.996,11.136-11.136,11.136H25.313"/>
      <path fill="none" stroke="#43637D" strokeMiterlimit="10" d="M75.536,180.462
        c2.131,1.166,4.545,1.809,7.027,1.809c8.072,0,14.642-6.569,14.642-14.643s-6.569-14.643-14.642-14.643H18.043"/>
    </g>
  </symbol>
}