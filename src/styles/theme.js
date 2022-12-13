import styled, { css } from "styled-components";

const deviceSize = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: " 1536px",
};

const device = {
  sm: `@media only screen and (max-width: ${deviceSize.sm})`,
  md: `@media only screen and (max-width: ${deviceSize.md})`,
  lg: `@media only screen and (max-width: ${deviceSize.lg})`,
  xl: `@media only screen and (max-width: ${deviceSize.xl})`,
  xxl: `@media only screen and (max-width: ${deviceSize.xxl})`,
};

export const theme = {
  deviceSize,
  device,
};
