import { WeatherSvg as _WeatherSvg } from "./WeatherSvg";
import styled from "@emotion/styled";
import './App.css'


const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
`;

const WeatherSvg = styled(_WeatherSvg)`
  width: 200px;
  height: 200px;
`;

function App() {
  return (
    <>
      <Row>
        <WeatherSvg state="sunny" />
        <WeatherSvg state="clear-night" />
        <WeatherSvg state="partlycloudy" />
        <WeatherSvg state="partlycloudy" night />
        <WeatherSvg state="rainy" />
        <WeatherSvg state="pouring" />
        <WeatherSvg state="snowy" />
        <WeatherSvg state="snowy-rainy" />
        <WeatherSvg state="hail" />
        <WeatherSvg state="cloudy" />
        <WeatherSvg state="fog" />
        <WeatherSvg state="lightning" />
        <WeatherSvg state="lightning-rainy" />
        <WeatherSvg state="windy" />
      </Row>
    </>
  )
}

export default App
