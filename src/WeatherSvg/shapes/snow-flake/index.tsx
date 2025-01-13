import { css, keyframes } from "@emotion/react";
import type { ShapeType } from "../type";

const snowKeyframes = keyframes`
  0% {
    transform: translate(5px, 0px);
    opacity: 1;
  }
  25% {
    transform: translate(0px, 10px);
    opacity: 1;
  }
  50% {
    transform: translate(7px, 20px);
    opacity: 1;
  }
  75% {
    transform: translate(0px, 30px);
    opacity: 0.75;
  }
  100% {
    transform: translate(10px, 40px);
    opacity: 0.5;
  }
`;


export const snowFlake: ShapeType = {
  styles: css`
    #snowFlake {
      fill: none;
      stroke: white;
      stroke-width: 0.6;
    }
    
    #snowFlake1 {
      animation: ${snowKeyframes} 4s linear infinite;
    }
    
    #snowFlake2 {
      animation: ${snowKeyframes} 3s linear infinite 0.8s;
    }
    
    #snowFlake3 {
      animation: ${snowKeyframes} 5s linear infinite 0.5s;
    }
    
    #snowFlake4 {
      animation: ${snowKeyframes} 6s linear infinite 1s;
    }
    
    #snowFlake5 {
      animation: ${snowKeyframes} 4s linear infinite 0.6s;
    }
    
  `,
  defs: <></>,
  symbol: <symbol id="snowFlake">
    <path d="M5,0 L5,10 M0,5 L10,5 M1.5,1.5 L8.5,8.5 M8.5,1.5 L1.5,8.5" />
    <path d="M3.5,0.25 L5,2 L6.5,0.25 M3.5,9.75 L5,8 L6.5,9.75" />
    <path d="M0.25,3.5 L2,5 L0.25,6.5 M9.75,3.5 L8,5 L9.75,6.5" />
    <path d="M0.75,2.90 L2.85,2.85 L2.90,0.75 M7.25,9.35 L7.15,7.15 L9.35,7.25" />
    <path d="M0.75,7.25 L2.85,7.15 L2.90,9.35 M7.15,0.75 L7.25,2.85 L9.35,2.90" />
  </symbol>
};