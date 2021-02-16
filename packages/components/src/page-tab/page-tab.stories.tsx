import { PageTab } from './page-tab.component';

import Icon from '@monocle/icons/src/grid.svg';

export default {
  title: 'Components/PageTab',
  component: PageTab,
  argTypes: {},
};

const Template = (args) => <PageTab {...args} />;

export const Active = Template.bind({});
Active.args = {
  id: 'Active',
  icon: <Icon width="14" height="14" />,
  name: 'Example Server Name',
  isActive: true,
};
export const InActive = Template.bind({});
InActive.args = {
  id: 'InActive',
  icon: <Icon width="14" height="14" />,
  name: 'Default View',
  isActive: false,
};
