import { Form, Formik } from "formik";
import { FC, useState, PropsWithChildren } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import {
  Button,
  Field,
  IFormValues,
  Modal,
  ModalHead,
} from "@monocle/components";
import Plus from "@monocle/icons/src/plus.svg";
import { actions as viewActions } from "../../../../redux/modules/view";

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
        <ModalHead onClose={() => setOpen(false)}>
          <FormattedMessage
            id="new-view-modal-header"
            description="new view modal header"
            defaultMessage="New View"
          />
        </ModalHead>
        <Formik<NewFormValues> initialValues={{ name: "" }} onSubmit={onSubmit}>
          <NewViewForm />
        </Formik>
      </Modal>
    </>
  );
};

const NewViewForm: FC<PropsWithChildren<unknown>> = () => {
  const intl = useIntl();

  return (
    <Form className="grid gap-2 grid-cols-1 p-3 dark:bg-code-800 bg-white">
      <Field
        name="name"
        type="text"
        placeholder={intl.formatMessage({
          id: "new-view-input-placeholder",
          description: "new view input placeholder",
          defaultMessage: "View Name (e.g. Ground Floor)",
        })}
      />
      <Button type="submit">
        <FormattedMessage
          id="create-new-view"
          description="create view button"
          defaultMessage="Create new view"
        />
      </Button>
    </Form>
  );
};
