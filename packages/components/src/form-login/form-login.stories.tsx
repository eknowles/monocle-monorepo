import { FormLogin } from './form-login.component';
import { Formik } from 'formik';

export default {
  title: 'Components/FormLogin',
  component: FormLogin,
  argTypes: {},
};

const Template = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <FormLogin {...args} />
  </Formik>
);

export const Primary = Template.bind({});
Primary.args = {};
