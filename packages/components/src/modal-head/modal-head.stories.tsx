import { ModalHead } from './modal-head.component';

export default {
  title: 'Components/ModalHead',
  component: ModalHead,
  argTypes: {},
};

const Template = (args) => <ModalHead {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'children',
};
