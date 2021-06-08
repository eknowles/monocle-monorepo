import type { FC } from 'react';
import ReactModal from 'react-modal';

export const Modal: FC<ReactModal.Props> = ({ children, ...props }) => (
  <ReactModal
    className="w-full max-w-2xl shadow-xl focus:outline-none focus:ring focus:border-blue-900"
    overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-75 bg-code-900"
    {...props}
  >
    {children}
  </ReactModal>
);
