import { Meta, Story } from "@storybook/react";
import { Form, Formik } from "formik";
import { Field, FieldProps } from "./field.component";

export default {
  title: "Components/Field",
  component: Field,
  argTypes: {},
} as Meta;

const Template: Story<FieldProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Form>
      <Field {...args} />
    </Form>
  </Formik>
);

export const Primary = Template.bind({});
Primary.args = {
  type: "text",
  name: "name",
  placeholder: "Story",
};
