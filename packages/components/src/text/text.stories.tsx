import * as React from 'react';
import { Text } from './text.component';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
};

const Template = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'storybook',
};
