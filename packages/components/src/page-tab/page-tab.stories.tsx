import { PageTab } from './page-tab.component';

export default {
  title: 'Components/PageTab',
  component: PageTab,
  argTypes: {},
};

const Template = (args) => <PageTab {...args} />;

export const Active = Template.bind({});
Active.args = {
  id: 'Active',
  icon: 'server',
  name: 'Example Server Name',
  isActive: true,
};
export const InActive = Template.bind({});
InActive.args = {
  id: 'InActive',
  icon: 'view',
  name: 'Default View',
  isActive: false,
};
