import { Meta, Story } from "@storybook/react";
import { PageTabBar } from "./page-tab-bar.component";

export default {
  title: "Components/PageTabBar",
  component: PageTabBar,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <PageTabBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "children",
};
