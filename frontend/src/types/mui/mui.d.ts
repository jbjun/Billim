/* eslint-disable @typescript-eslint/no-empty-interface */
import "@mui/material/styles";
import { PaletteColorOptions } from "@mui/material/styles";
import {
  CustomPrimaryPalette,
  CustomTextpalette,
  CustomTypography,
  CustomTypographyOptions,
  CustomTypographyVariant,
} from "./theme";

declare module "@mui/material/styles" {
  interface Palette {
    primary: CustomPrimaryPalette;
    red: PaletteColorOptions;
    green: PaletteColorOptions;
    blue: PaletteColorOptions;
    text: CustomTextpalette;
  }
  interface PaletteOptions {
    primary?: CustomPrimaryPalette;
    red?: PaletteColorOptions;
    green?: PaletteColorOptions;
    blue?: PaletteColorOptions;
    text?: CustomTextpalette;
  }

  interface TypographyVariantsOptions extends CustomTypographyOptions {}
  interface Typography extends CustomTypography {}

  interface Theme {
    palette: {
      primary: CustomPrimaryPalette;
      red: PaletteColorOptions;
      green: PaletteColorOptions;
      blue: PaletteColorOptions;
      text: CustomTextpalette;
    };
    typography: CustomTypography;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides
    extends Record<CustomTypographyVariant, true> {}
}
