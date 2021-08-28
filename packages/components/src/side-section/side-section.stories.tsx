import { Meta, Story } from "@storybook/react";
import { ISideSectionProps, SideSection } from "./side-section.component";

export default {
  title: "Components/SideSection",
  component: SideSection,
  argTypes: {},
} as Meta;

const Template: Story<ISideSectionProps> = (args) => <SideSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "label",
};
