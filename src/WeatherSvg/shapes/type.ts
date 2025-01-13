import { SerializedStyles } from "@emotion/react";
import { ReactElement, Fragment } from "react";

export interface ShapeType {
  styles: SerializedStyles;
  defs?: ReactElement<typeof Fragment>;
  symbol: ReactElement<"symbol">;
}