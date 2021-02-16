import { MemoryRouter } from 'react-router-dom';
import { SideNavItem } from './side-nav-item.component';

export default {
  title: 'Components/SideNavItem',
  component: SideNavItem,
  argTypes: {},
};

const Template = (args) => (
  <MemoryRouter>
    <SideNavItem {...args} />
  </MemoryRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  path: '/app',
  exact: true,
  state: { setTab: { name: 'New Tab', id: 1, icon: 'view', path: '/app' } },
  children: 'children',
};
