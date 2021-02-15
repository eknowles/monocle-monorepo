import { Side } from "./side.component";

export default {
  title: "Components/Side",
  component: Side,
  argTypes: {},
};

const Template = (args) => <Side {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "children",
};
