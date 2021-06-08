import { Field } from "./field.component";

export default {
  title: "Components/Field",
  component: Field,
  argTypes: {},
};

const Template = (args) => <Field {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "children",
};
