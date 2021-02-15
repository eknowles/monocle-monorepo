import { PageTabBar } from "./page-tab-bar.component";

export default {
  title: "Components/PageTabBar",
  component: PageTabBar,
  argTypes: {},
};

const Template = (args) => <PageTabBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "children",
};
