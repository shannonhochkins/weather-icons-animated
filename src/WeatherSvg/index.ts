
export {
  type WeatherState,
  type WeatherSvgProps,
  WeatherSvg
} from './WeatherSvg';
export type { ShapeType } from './shapes/type';

export {
  Base
} from './base';

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

export const shapes = {
  lighteningBolt,
  sun,
  hail,
  moon,
  star,
  clouds,
  rain,
  snowFlake,
  wind,
  fog,
}