import React from 'react';
import { Button } from './button.component';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'i am a button',
};
