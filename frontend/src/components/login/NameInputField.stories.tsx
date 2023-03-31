import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Chip } from "@mui/material"
import NameInputField from "./NameInputField"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/NameInputField",
  component: NameInputField,
} as ComponentMeta<typeof NameInputField>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NameInputField> = args => <NameInputField {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
