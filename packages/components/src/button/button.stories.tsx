import { Meta, Story } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "./button.component";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "i am a button",
};
