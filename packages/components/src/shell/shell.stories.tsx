import { Shell } from './shell.component';

export default {
  title: 'Components/Shell',
  component: Shell,
  argTypes: {},
};

const Template = (args) => <Shell {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'child',
};
