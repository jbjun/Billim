/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  PaletteColorOptions,
  TypographyVariant,
  TypographyStyle,
} from "@mui/material/styles";
import {
  FontStyle,
  FontStyleOptions,
  TypographyStyleOptions,
  TypographyUtils,
} from "@mui/material/styles/createTypography";

type PrimaryColors =
  | "main"
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000"
  | "1100"
  | "1200"
  | "1300";

export type TextColors =
  | "primary"
  | "black"
  | "white"
  | "gray900"
  | "gray800"
  | "gray700"
  | "gray600"
  | "gray500"
  | "gray400"
  | "gray300"
  | "gray200"
  | "gray100"
  | "gray50";

export type CustomTypographyVariant =
  | "h7"
  | "h8"
  | "t1"
  | "t2"
  | "t3"
  | "t4"
  | "t5"
  | "t6"
  | "t7"
  | "b1"
  | "b2"
  | "b3"
  | "b4"
  | "b5"
  | "b6"
  | "b7"
  | "b8"
  | TypographyVariant;

export type CustomPrimaryPalette = Record<PrimaryColors, string> &
  PaletteColorOptions;

export type CustomTextpalette = Record<TextColors, string> &
  PaletteColorOptions;

export interface CustomTypographyOptions
  extends Partial<
    Record<CustomTypographyVariant, TypographyStyleOptions> & FontStyleOptions
  > {}

export interface CustomTypography
  extends Record<CustomTypographyVariant, TypographyStyle>,
    FontStyle,
    TypographyUtils {}
