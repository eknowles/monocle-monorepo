import { Meta, Story } from "@storybook/react";
import { ModalHead } from "./modal-head.component";

export default {
  title: "Components/ModalHead",
  component: ModalHead,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ModalHead {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "children",
};
