import React from "react";
import { AppBar } from "./app-bar.component";

export default {
  title: "Components/AppBar",
  component: AppBar,
  argTypes: {},
};

const Template = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "children",
};
