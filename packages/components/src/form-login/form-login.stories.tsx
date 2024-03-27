import { Meta, Story } from "@storybook/react";
import { FormLogin } from "./form-login.component";
import { Formik } from "formik";

export default {
  title: "Components/FormLogin",
  component: FormLogin,
  argTypes: {
    title: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story = (args: {title: string}) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <FormLogin {...args} />
  </Formik>
);

export const Primary = Template.bind({});
Primary.args = {};
