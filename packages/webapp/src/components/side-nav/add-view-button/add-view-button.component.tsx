import { Form, Formik } from 'formik';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Field, IFormValues, Modal, ModalHead } from '@monocle/components';
import Plus from '@monocle/icons/src/plus.svg';
import { actions as viewActions } from '../../../redux/modules/view';

type NewFormValues = { name: string };

export const AddViewButton = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (values: NewFormValues) => {
    dispatch(viewActions.addView(values));
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="dark:text-code-100 dark:hover:text-white focus:outline-none focus:ring focus:border-blue-900"
      >
        <Plus width={20} height={20} />
      </button>

      <Modal
        isOpen={isOpen}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        shouldCloseOnOverlayClick={true}
      >
        <ModalHead onClose={() => setOpen(false)}>NEW VIEW</ModalHead>
        <Formik<NewFormValues> initialValues={{ name: '' }} onSubmit={onSubmit}>
          <NewViewForm />
        </Formik>
      </Modal>
    </>
  );
};

const NewViewForm: FC = () => (
  <Form className="grid gap-2 grid-cols-1 p-3 dark:bg-code-800">
    <Field name="name" type="text" placeholder="View Name (e.g. Ground Floor)" />
    <Button type="submit">Create New View</Button>
  </Form>
);
