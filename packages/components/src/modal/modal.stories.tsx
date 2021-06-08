import { useState } from 'react';
import { Modal } from './modal.component';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
};

const Template = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} contentLabel="Modal Example" {...args}>
        <button onClick={() => setOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'children',
};
