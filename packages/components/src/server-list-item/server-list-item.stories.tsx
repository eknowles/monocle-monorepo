import React from 'react';
import { ServerListItem } from './server-list-item.component';

export default {
  title: 'Components/ServerListItem',
  component: ServerListItem,
};

const Template = (args) => <ServerListItem {...args} />;

export const Active = Template.bind({});
Active.args = {
  name: 'Server name',
  isActive: true,
};

export const InActive = Template.bind({});
InActive.args = {
  name: 'Server name',
  isActive: false,
};
