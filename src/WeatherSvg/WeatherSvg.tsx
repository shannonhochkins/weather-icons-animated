import { type ReactElement } from 'react';
import { Base } from './base';

export type WeatherState =
  "sunny" | 
  "clear-night" |
  "partlycloudy" | 
  "cloudy" | 
  "fog" | 
  "hail" | 
  "rainy" | 
  "snowy" | 
  "snowy-rainy" | 
  "pouring" | 
  "lightning" | 
  "lightning-rainy" | 
  "windy" | 
  "windy-variant";

const cloudyStates = new Set<WeatherState>([
  "partlycloudy",
  "cloudy",
  "fog",
  "hail",
  "rainy",
  "snowy",
  "snowy-rainy",
  "pouring",
  "lightning",
  "lightning-rainy",
  "windy",
  "windy-variant",
]);

const rainStates = new Set<WeatherState>(["hail", "rainy", "pouring", "lightning-rainy", "snowy-rainy"]);
const windyStates = new Set<WeatherState>(["windy", "windy-variant"]);
const snowyStates = new Set<WeatherState>(["snowy", "snowy-rainy"]);
const lightningStates = new Set<WeatherState>(["lightning", "lightning-rainy"]);
const centerCloudStates = new Set<WeatherState>(['fog', 'partlycloudy', 'cloudy', 'windy', 'windy-variant']);

export interface WeatherSvgProps extends React.ComponentProps<'svg'> {
  state: WeatherState;
  night?: boolean;
}

export const WeatherSvg = ({ state, night, width, height, ...rest }: WeatherSvgProps): ReactElement<SVGElement> => {
  return <svg viewBox="0 0 100 100" width={width ?? '100%'} height={height ?? '100%'} {...rest}>
      <Base />
       {state === "sunny" && <>
        <use xlinkHref="#sun"/>
       </>}
       {state === "clear-night" && <>
          <use xlinkHref="#moon" x="-15" className="animated bob infinite" />
          <use xlinkHref="#star" x="42" y="30" className="stars animated infinite flash"/>
          <use xlinkHref="#star" x="61" y="32" className="stars animated infinite flash delay-1s"/>
          <use xlinkHref="#star" x="55" y="50" className="stars animated infinite flash delay-2s"/>
       </>}
       {state === "partlycloudy" && night
        ? <>
            <use xlinkHref="#moon" x="-12" y="0"/>
            <use xlinkHref="#star" x="42" y="30" className="stars animated infinite flash"/>
            <use xlinkHref="#star" x="61" y="32" className="stars animated infinite flash delay-1s"/>
            <use xlinkHref="#star" x="55" y="50" className="stars animated infinite flash delay-2s"/>
          </>
        : state === "partlycloudy"
        ? <>
            <use xlinkHref="#sun" x="12" y="12" transform="scale(0.5)" />
          </>
        : null
    }
    
    {rainStates.has(state) && <>
      <use className="drop1" xlinkHref="#rainDrop" x="15" y="50"/>
      <use className="drop2" xlinkHref="#rainDrop" x="30" y="50"/>
      <use className="drop3" xlinkHref="#rainDrop" x="37" y="50"/>
      <use className="drop4" xlinkHref="#rainDrop" x="50" y="50"/>
      <use className="drop5" xlinkHref="#rainDrop" x="60" y="50"/>
      <use className="drop6" xlinkHref="#rainDrop" x="70" y="50"/>
    </>}
    {
      state === "hail" && <>
        <use xlinkHref="#hail" x="7" />
      </>
    }
    {
      state === "pouring" && <>
        <use className="drop6" xlinkHref="#rainDrop" x="10" y="55"/>
        <use className="drop5" xlinkHref="#rainDrop" x="22" y="55"/>
        <use className="drop4" xlinkHref="#rainDrop" x="32" y="55"/>
        <use className="drop3" xlinkHref="#rainDrop" x="43" y="55"/>
        <use className="drop2" xlinkHref="#rainDrop" x="55" y="55"/>
        <use className="drop1" xlinkHref="#rainDrop" x="65" y="55"/>
      </>
    }
    {snowyStates.has(state) && <>
      <use id="snowFlake1" xlinkHref="#snowFlake" x="20" y="40"/>
      <use id="snowFlake2" xlinkHref="#snowFlake" x="35" y="50"/>
      <use id="snowFlake3" xlinkHref="#snowFlake" x="45" y="45"/>
      <use id="snowFlake4" xlinkHref="#snowFlake" x="50" y="50"/>
      <use id="snowFlake5" xlinkHref="#snowFlake" x="63" y="50"/>
    </>}

    {lightningStates.has(state) && <>
      <use xlinkHref="#lighteningBolt" x="30" y="54" className="lightening animated infinite flash"/>
      <use xlinkHref="#lighteningBolt" x="45" y="40" className="lightening animated infinite flash delay-2s"/>
      <use xlinkHref="#lighteningBolt" x="55" y="50" className="lightening animated infinite flash delay-1s"/>
    </>}
    {
      windyStates.has(state) && <>
        <use xlinkHref="#wind" x="45" y="30" />
        <use xlinkHref="#wind" x="50" y="-10" className="animated delay-1s" />
      </>
    }
    {
      cloudyStates.has(state) && <>
        <use xlinkHref="#grayCloud"
          id="cloud"
          className={`animated infinite float small-cloud ${centerCloudStates.has(state) ? 'push' : ''}`}
          filter={`${state === 'fog' ? `url(#fogFilter)` : ''}`}
          fill={`url(#${state === 'fog' ? 'fogGradient' : 'gradDarkGrey'})`}
          x="0" />
        <use
          xlinkHref="#grayCloud"
          x="25"
          y="10"
          className="small-cloud animated infinite reverse float"
          fill={`url(#${state === 'fog' ? 'fogGradient' : 'gradDarkGrey'})`}
          filter={`${state === 'fog' ? `url(#fogFilter)` : ''}`} />
        <use xlinkHref="#whiteCloud"  className="animated bob" x="7" y={centerCloudStates.has(state) ? '0' : '-7'} fill={`url(#${state === 'fog' ? 'fogGradient' : 'gradWhite'})`} filter={`${state === 'fog' ? `url(#fogFilter)` : ''}`} />
      </>
    }
  </svg>
}
