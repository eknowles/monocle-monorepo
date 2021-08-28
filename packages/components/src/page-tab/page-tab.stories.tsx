import { Meta, Story } from "@storybook/react";
import { IPageTabProps, PageTab } from "./page-tab.component";

import Icon from "@monocle/icons/src/grid.svg";

export default {
  title: "Components/PageTab",
  component: PageTab,
  argTypes: {},
} as Meta;

const Template: Story<IPageTabProps> = (args) => <PageTab {...args} />;

export const Active = Template.bind({});
Active.args = {
  icon: <Icon width="14" height="14" />,
  name: "Example Server Name",
  isActive: true,
};
export const InActive = Template.bind({});
InActive.args = {
  icon: <Icon width="14" height="14" />,
  name: "Default View",
  isActive: false,
};
