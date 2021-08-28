import React from "react";
import { Meta, Story } from "@storybook/react";
import { AppBar, AppBarProps } from "./app-bar.component";

export default {
  title: "Components/AppBar",
  component: AppBar,
  argTypes: {},
} as Meta;

const Template: Story<AppBarProps> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
