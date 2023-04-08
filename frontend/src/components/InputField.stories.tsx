import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField from "./InputField";
import { Chip } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "휴대폰번호",
  value: "",
  onChange: () => {},
  required: true,
  placeholder: "'-'없이 숫자만 입력해 주세요.",
  error: true,
  helperText: "주소를 입력해 주세요.",
  startAdornment: <Chip label="인증받기" size="small" onClick={() => {}} />,
};
