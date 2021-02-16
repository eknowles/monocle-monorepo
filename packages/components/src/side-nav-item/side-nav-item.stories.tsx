import { SideNavItem } from "./side-nav-item.component";

export default {
  title: "Components/SideNavItem",
  component: SideNavItem,
  argTypes: {},
};

const Template = (args) => <SideNavItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "children",
};
