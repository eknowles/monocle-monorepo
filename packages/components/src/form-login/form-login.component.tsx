import { Form } from "formik";
import type { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Button } from "../button";
import { Field } from "../field";

export type IFormValues = Record<"username" | "password", string>;

export const FormLogin: FC = () => {
  const intl = useIntl();
  return (
    <Form className="grid gap-2 grid-cols-1 max-w-sm p-4 dark:bg-code-800 bg-white shadow-lg">
      <h2 className="dark:text-code-300 text-sm font-light font-mono tracking-wider">
        {window.location.host}
      </h2>
      <Field
        name="username"
        type="text"
        placeholder={intl.formatMessage({
          id: "c-usr",
          description: "username field placeholder",
          defaultMessage: "Username",
        })}
      />
      <Field
        name="password"
        type="password"
        placeholder={intl.formatMessage({
          id: "c-pwd",
          description: "password field placeholder",
          defaultMessage: "Password",
        })}
      />
      <Button type="submit">
        <FormattedMessage
          id="c-login-btn"
          description="Log in button text"
          defaultMessage="Log In"
        />
      </Button>
    </Form>
  );
};
