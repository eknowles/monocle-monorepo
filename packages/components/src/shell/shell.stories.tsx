import { Meta, Story } from "@storybook/react";
import { Shell } from "./shell.component";

export default {
  title: "Components/Shell",
  component: Shell,
  argTypes: {},
} as Meta;

const Template: Story = (args: {title: string}) => <Shell {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "child",
};
