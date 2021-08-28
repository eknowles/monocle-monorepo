import { Meta, Story } from "@storybook/react";
import { Side } from "./side.component";

export default {
  title: "Components/Side",
  component: Side,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Side {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "children",
};
