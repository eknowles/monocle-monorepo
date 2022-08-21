import { Timeline } from "./timeline.component";

export default {
  title: "Components/Timeline",
  component: Timeline,
  argTypes: {},
};

const Template = (args) => <Timeline {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "children",
};
