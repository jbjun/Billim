import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dialog from "./Dialog";
import { Button } from "@mui/material";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={onOpen}>Dialog 열기</Button>
      <Dialog {...args} open={open} onClose={onClose}>
        <div>본문</div>
      </Dialog>
    </>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "주소 찾기",
};
