import { Form } from "formik";
import type { FC } from "react";
import { Button } from "../button";
import { Field } from "../field";

export type IFormValues = Record<"username" | "password", string>;

export const FormLogin: FC = () => (
  <Form className="grid gap-2 grid-cols-1 max-w-sm p-4 dark:bg-code-800 bg-white shadow-lg">
    <h2 className="dark:text-code-300 text-sm font-light font-mono tracking-wider">
      {window.location.host}
    </h2>
    <Field name="username" type="text" placeholder="Username" />
    <Field name="password" type="password" placeholder="Password" />
    <Button type="submit">Log in</Button>
  </Form>
);
