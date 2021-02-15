import { SideSection } from './side-section.component';

export default {
  title: 'Components/SideSection',
  component: SideSection,
  argTypes: {},
};

const Template = (args) => <SideSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'label',
};
