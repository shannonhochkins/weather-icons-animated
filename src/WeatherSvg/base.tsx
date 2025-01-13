import { Fragment, ReactElement } from 'react';
import { Global, css } from '@emotion/react';
import { globalStyles } from './animations';
import { lighteningBolt } from './shapes/lightening-bolt';
import { sun } from './shapes/sun';
import { hail } from './shapes/hail';
import { moon } from './shapes/moon';
import { star } from './shapes/star';
import { clouds } from './shapes/clouds';
import { rain } from './shapes/rain';
import { snowFlake } from './shapes/snow-flake';
import { wind } from './shapes/wind';
import { fog } from './shapes/fog';

function Styles() {
  return <Global
    styles={css`
      ${fog.styles}
      ${globalStyles}
      ${sun.styles}
      ${hail.styles}
      ${moon.styles}
      ${star.styles}
      ${clouds.styles}
      ${rain.styles}
      ${lighteningBolt.styles}
      ${snowFlake.styles}
      ${wind.styles}
    `}
  />
}

export function Base(): ReactElement<typeof Fragment> {
  return <>
    <Styles />
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ width: 0, height: 0}}>
      <defs>
        {sun.defs}
        {fog.defs}
        {moon.defs}
        {star.defs}
        {clouds.defs}
        {lighteningBolt.defs}
        {wind.defs}
        {rain.defs}
        {snowFlake.defs}
        <radialGradient id="gradYellow" cx="50%" cy="50%" r="80%" fx="90%" fy="80%">
          <stop offset="0%" style={{
            stopColor: 'yellow',
            stopOpacity: 1
          }} />
          <stop offset="100%" style={{
            stopColor: 'orange',
            stopOpacity: 1
          }} />
        </radialGradient>
        <radialGradient id="gradDarkGrey" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{
            stopColor: '#fff',
            stopOpacity: 1
          }} />
          <stop offset="70%" style={{
            stopColor: '#ddd',
            stopOpacity: 1
          }} />
          <stop offset="100%" style={{
            stopColor: '#ccc',
            stopOpacity: 1
          }} />
        </radialGradient>
        
        <radialGradient id="gradGray" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{
            stopColor: 'white',
            stopOpacity: 1
          }} />
          <stop offset="100%" style={{
            stopColor: 'darkgray',
            stopOpacity: 1
          }} />
        </radialGradient>
        <linearGradient id="gradWhite" x1="40%" y1="50%" x2="90%" y2="90%">
          <stop offset="0%" style={{
            stopColor: 'white',
            stopOpacity: 1
          }} />
          <stop offset="100%" style={{
            stopColor: 'darkgray',
            stopOpacity: 1
          }} />
        </linearGradient>     
      </defs>
      {hail.symbol}
      {sun.symbol}
      {moon.symbol}
      {star.symbol}
      {clouds.symbol}
      {rain.symbol}
      {lighteningBolt.symbol}
      {snowFlake.symbol}
      {wind.symbol}
      {fog.symbol}
    </svg>
  </>
}
