import { ServerDetails } from './server-details.component';

export default {
  title: 'Components/ServerDetails',
  component: ServerDetails,
  argTypes: {},
};

const Template = (args) => <ServerDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'Monocle Server Name',
};
