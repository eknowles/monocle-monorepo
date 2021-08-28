import { Meta, Story } from "@storybook/react";
import { IServerDetailsProps, ServerDetails } from "./server-details.component";

export default {
  title: "Components/ServerDetails",
  component: ServerDetails,
  argTypes: {},
} as Meta;

const Template: Story<IServerDetailsProps> = (args) => (
  <ServerDetails {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: "Monocle Server Name",
};
