import { SideViewItem } from './side-view-item.component';

export default {
  title: 'Components/SideViewItem',
  component: SideViewItem,
  argTypes: {},
};

const Template = (args) => <SideViewItem {...args} />;

export const Active = Template.bind({});
Active.args = {
  name: 'Default View',
  isActive: true,
};

export const InActive = Template.bind({});
InActive.args = {
  name: 'Default View',
  isActive: false,
};
