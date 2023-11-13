import { css, keyframes } from "@emotion/react";
import { fadeInOutKeyframes } from '../../animations/fade-in-out';

const weatherAnimationIncrease = Math.PI * 0.01;
const weatherAnimationStep = 2;
const weatherAnimationSize = 70; // 70% as a decimal for calculations

// Translated hail function
const hailTransform = (xMultiplier: number, weatherAnimationT: number, weatherAnimationI: number) => {
  const eq = Math.sin(weatherAnimationT) * 0.5;
  const x = xMultiplier * (weatherAnimationI - 50); // Assuming the xMultiplier accounts for units
  const y = eq * -(weatherAnimationSize * 0.25) + (weatherAnimationSize * 0.25);
  return `translate(${x}%, ${y}%)`; // Add '%' for pixel units
};

// Function to generate keyframes
const generateHailKeyframes = (xMultiplier: number) => {
  let weatherAnimationI = 51;
  let weatherAnimationT = 0;
  let keyframesString = `0% { transform: translate(0, 0); }\n`;

  while (weatherAnimationI <= 100) {
    const transform = hailTransform(xMultiplier, weatherAnimationT, weatherAnimationI);
    keyframesString += `${weatherAnimationI}% { transform: ${transform} }\n`;
    weatherAnimationT += weatherAnimationIncrease * weatherAnimationStep * 2;
    weatherAnimationI += weatherAnimationStep;
  }
  // Emotion's keyframes template literal should not include the keyframes prefix
  return keyframes`${keyframesString}`;
};

const weatherHailLeft = generateHailKeyframes(-0.3);
const weatherHailRight = generateHailKeyframes(0.3);
const weatherHailMiddle = generateHailKeyframes(-0.15);
const weatherHailMiddle2 = generateHailKeyframes(0.15);


export const hail = {
  styles: css`
    .hail {
      transform: translateY(5%);
      fill: #eee;
      fill-opacity: 0;
      animation: 1s ease-in infinite;

      &:nth-of-type(1),
      &:nth-of-type(4) {
        animation-name: ${weatherHailLeft}, ${fadeInOutKeyframes};
      }

      &:nth-of-type(2) {
        animation-name: ${weatherHailMiddle}, ${fadeInOutKeyframes};
      }

      &:nth-of-type(5) {
        animation-name: ${weatherHailMiddle2}, ${fadeInOutKeyframes};
      }

      &:nth-of-type(3),
      &:nth-of-type(6) {
        animation-name: ${weatherHailRight}, ${fadeInOutKeyframes};
      }

      ${Array.from({ length: 6 }, (_, i) => i + 1).map(
        (i) => `
          &:nth-of-type(${i}) {
            animation-delay: ${1 * (1 / 6) * i - 1 / 6}s;
          }
        `
      ).join('')}
    }
  `,
  symbol: <symbol id="hail">
    <circle className="hail" cx="43.4" cy="69.9" r="1.6"/>
    <circle className="hail" cx="51.6" cy="69.9" r="1.6"/>
    <circle className="hail" cx="59.9" cy="69.9" r="1.6"/>
    <circle className="hail" cx="43.4" cy="69.9" r="1.6"/>
    <circle className="hail" cx="51.6" cy="69.9" r="1.6"/>
    <circle className="hail" cx="59.9" cy="69.9" r="1.6"/>
  </symbol>
}